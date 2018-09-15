import * as invariant from 'invariant'
// @ts-ignore
// import * as global from 'global'

class Util
{
  public static invariant = invariant

  public static get language()
  {
    // @ts-ignore: fix IE language
    return global && global.navigator && (global.navigator.language || global.navigator.browserLanguage)
  }

  public static delay(time: number): Promise<void>
  {
    return new Promise(resolve => setTimeout(resolve, time))
  }
}

export default Util