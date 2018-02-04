// Third-party Dependency
import { AsyncStorage } from 'react-native'
import * as _ from 'lodash'

// Self Dependency
import { RuaStorageInterface } from './Interface'

// Rua Core Dependency
import { AbstractRuaPackage } from 'rua-core/lib/Abstractions'
import { AnyData, AnyObject } from 'rua-core/lib/Types'

class RuaStorage extends AbstractRuaPackage implements RuaStorageInterface {

  constructor() {
    super()
    this.booted = true
  }

  public async set(key: string | string[], value: AnyData | AnyData[]): Promise<void> {
    if (_.isArray(key)) {
      // @ts-ignore
      const values: string[] = value.map(item => JSON.stringify(item))
      // @ts-ignore
      const pair: [string, string][] = _.zip(
        <string[]>key,
        <string[]>values,
      )
      await AsyncStorage.multiSet(pair)
      return
    }

    await AsyncStorage.setItem(<string>key, JSON.stringify(value))
    return
  }

  public async get(key: string | string[], defaultValue?: any): Promise<AnyData> {
    if (_.isArray(key)) {
      const data: string[][] = await AsyncStorage.multiGet(<string[]>key)
      data.map((item: string[]) => {
        return [item[0], JSON.parse(item[1])]
      })
      return data.length ? _.fromPairs(data) : defaultValue
    }

    const value = await AsyncStorage.getItem(<string>key)
    // @ts-ignore
    return JSON.parse(value) || defaultValue
  }

  public async remove(key: string | string[]): Promise<void> {
    if (_.isArray(key)) {
      return await AsyncStorage.multiRemove(<string[]>key)
    }

    return await AsyncStorage.removeItem(<string>key)
  }

  public async clear(): Promise<void> {
    return await AsyncStorage.clear()
  }

  public async length(): Promise<number> {
    const keys = await this.keys()
    return keys.length
  }

  public async keys(): Promise<string[]> {
    return await AsyncStorage.getAllKeys()
  }

  public async all(): Promise<AnyObject> {
    let data = {}
    const keys = await this.keys()
    const rawAllData = await AsyncStorage.multiGet(keys)
    // Reformat
    for (const rawItem in rawAllData) {
      // @ts-ignore: index on object
      data[rawItem[0]] = rawItem[1]
    }
    return data
  }
}

export default RuaStorage