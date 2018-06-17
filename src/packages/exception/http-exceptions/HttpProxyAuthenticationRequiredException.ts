import { HttpException } from '../exceptions'

/**
 * HttpProxyAuthenticationException extends HttpException
 *
 * @class HttpProxyAuthenticationException
 */
class HttpProxyAuthenticationRequiredException extends HttpException {
  constructor() {
    super(407, 'Proxy Authentication Required')
  }
}

export default HttpProxyAuthenticationRequiredException