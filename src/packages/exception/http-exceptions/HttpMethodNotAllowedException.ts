import { HttpException } from '../exceptions'

/**
 * HttpMethodNotAllowedException extends HttpException
 *
 * @class HttpMethodNotAllowedException
 */
class HttpMethodNotAllowedException extends HttpException {
  constructor() {
    super(405, 'Method Not Allowed')
  }
}

export default HttpMethodNotAllowedException