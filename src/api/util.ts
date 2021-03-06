import { util } from '../rua/util'

export function warn(msg: string) {
  return console.warn(`[Rua][APIRequest]: ${msg}`)
}

export function invariant(condition: any, msg: string)
{
  return util.invariant(condition, `[Rua][APIRequest]${msg}`)
}
