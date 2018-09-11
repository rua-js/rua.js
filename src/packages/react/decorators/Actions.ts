import FunctionCollectionDescriptorBuildUtil from '../../utility/FunctionCollectionDescriptorBuildUtil'

export default function Action(actions: string[])
{
  return function (target: any, key: string, descriptor: PropertyDescriptor)
  {
    return FunctionCollectionDescriptorBuildUtil.create(target, key, descriptor, function ()
    {
      // @ts-ignore
      const store = global.reduxStore

      if (!store)
      {
        return console.error('[Decorator]Action required global.reduxStore')
      }

      actions.forEach(action => store.dispatch({
        type: action,
      }))
    })
  }
}
