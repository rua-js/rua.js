import Cache from '../engine/Cache'
import { AnyData, AnyObject } from 'rua-core/lib/Types'

interface CacheInterface {
  useStore(storeName: string): CacheInterface
  get(key: string, defaultValue?: any): AnyData
  set(key: string, value: string, time?: number): AnyData
  remove(key: string): AnyData
  clear(): AnyObject
  length(): number
  keys(): string[]
  all(): AnyData
  restore(): Promise<void>
}

export default CacheInterface