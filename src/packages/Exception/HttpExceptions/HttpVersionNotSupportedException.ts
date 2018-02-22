import { HttpException } from '../Exceptions'

/**
 * HttpVersionNotSupportedException extends HttpException
 *
 * @class HttpVersionNotSupportedException
 */
class HttpVersionNotSupportedException extends HttpException {
  constructor() {
    super(505, 'Version Not Supported')
  }
}

export default HttpVersionNotSupportedException
