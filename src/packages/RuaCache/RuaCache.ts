import { storage } from '../RuaStorage/'
import RuaStorage from '../RuaStorage/RuaStorage'

import { RuaCacheInterface } from './Interface'
import { AbstractRuaPackage } from 'rua-core/lib/Abstractions'
import { AnyData, AnyObject } from 'rua-core/lib/Types'
import * as _ from 'lodash'

class RuaCache extends AbstractRuaPackage implements RuaCacheInterface {

  protected prefix: string = 'RuaCache-'

  /**
   * RuaStorage instance
   *
   * @type {RuaStorage}
   */
  protected storage: RuaStorage = storage

  /**
   * Cached data count
   *
   * @type {number}
   */
  protected count: number = -1

  /**
   * Cached data keys
   *
   * @type {string[]}
   */
  protected list: string[] = []

  public get(key: string, defaultValue?: any): AnyData {
    const realKeyName = this.getItemKeyName(key)
    // defaultValue will be returned if no data with the specific key
    if (!this.list.includes(realKeyName)) {
      return defaultValue
    }
    // retrieve data from cache with deserialization
    return JSON.parse(
      this.store[realKeyName]
    )
  }

  public set(key: string, value: string, time?: number): AnyData {
    const realKeyName: string = this.getItemKeyName(key)
    // add to list if it is NOT in the list
    if (!this.list.includes(realKeyName)) {
      this.list.push(realKeyName)
    }
    // save to cache
    this.store[realKeyName] = JSON.stringify(value)
    // todo: save to storage

    return value
  }

  public remove(key: string): AnyData {
    const realKeyName = this.getItemKeyName(key)
    // Cache removal
    _.unset(this.store, realKeyName)
    const removedData = _.pull(this.list, realKeyName)

    // Sync list
    this.storage.set(
      this.getListKeyName(),
      this.list,
    )
    // Sync item
    this.storage.remove(realKeyName)

    return removedData
  }

  public clear(): AnyObject {
    const removedData = this.store
    // reset data in memory
    this.count = 0
    this.list = []
    this.store = {}
    // remove all data from storage
    this.storage.remove(this.list)
    // remove list from storage
    this.storage.remove(this.getListKeyName())

    return removedData
  }

  public length(): number {
    return this.count
  }

  public keys(): string[] {
    return this.list
  }

  public all(): any {
    return this.store
  }

  public async restore(): Promise<void> {
    // Get list key
    const listKey: string = <string>this.getListKeyName()
    // Get list data
    const list: string = <string>await storage.get(listKey, [])
    // Parse list data
    this.list = <string[]>JSON.parse(list)
    // Load all saved cache data to store
    this.store = <AnyObject>await storage.get(this.list)
    // Calculate count
    this.count = this.list.length
  }

  /**
   *
   * @returns {string}
   */
  protected getListKeyName(): string {
    return `${this.prefix}list`
  }

  protected getItemKeyName(key: string): string {
    return `${this.prefix}${key}`
  }
}

export default RuaCache
