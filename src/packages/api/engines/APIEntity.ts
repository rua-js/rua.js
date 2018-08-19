import { APIEntityObject } from '../type'
import { APIEntityInterface } from '../interfaces'

class APIEntity implements APIEntityInterface
{
  protected entity: APIEntityObject

  constructor(entity: APIEntityObject | string)
  {
    if ('string' === typeof entity)
    {
      this.entity = {
        url: entity,
      }

      return this
    }

    this.entity = { ...entity }
  }

  public toObject(): APIEntityObject
  {
    return this.entity
  }
}

export default APIEntity