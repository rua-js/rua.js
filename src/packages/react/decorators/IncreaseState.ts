import { IncreaseStateConfigParameter } from '../types'
import { ObjectOf } from '../../core/type/data'

export default function IncreaseState(stateKeyOrConfig: string | IncreaseStateConfigParameter): any
{
  return function (target: any, key: string): any
  {
    if (target[key])
    {
      return console.error('[Decorator]IncreaseState will override original function')
    }

    Object.defineProperty(target, key, {
      get()
      {
        return function ()
        {
          if ('string' === typeof stateKeyOrConfig)
          {
            // @ts-ignore
            return (this.setState as Function)((state: ObjectOf<any>) =>
            {
              return {
                [stateKeyOrConfig]: state[stateKeyOrConfig] + 1,
              }
            })
          }

          const {
            key,
            step = 1,
            max,
          } = stateKeyOrConfig

          // @ts-ignore
          return (this.setState as Function)((state: any) =>
          {
            const currentValue = state[key]

            if (undefined !== max && currentValue > max)
            {
              return {
                [key]: max,
              }
            }

            let newValue = state[key] + step

            if (undefined !== max && newValue > max)
            {
              newValue = max
            }

            return {
              [key]: newValue,
            }
          })
        }.bind(this)
      },
    })
  }
}