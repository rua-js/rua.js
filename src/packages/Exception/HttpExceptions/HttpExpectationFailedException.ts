import { HttpException } from '../Exceptions'

/**
 * HttpExpectationFailedException extends HttpException
 *
 * @class HttpExpectationFailedException
 */
class HttpExpectationFailedException extends HttpException {
  constructor() {
    super(417, 'Expectation Failed')
  }
}

export default HttpExpectationFailedException
