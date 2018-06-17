import { HttpException } from '../exceptions'

/**
 * HttpBadRequestException extends HttpException
 *
 * @class HttpBadRequestException
 */
class HttpBadRequestException extends HttpException {
  constructor() {
    super(400, 'Bad request')
  }
}

export default HttpBadRequestException