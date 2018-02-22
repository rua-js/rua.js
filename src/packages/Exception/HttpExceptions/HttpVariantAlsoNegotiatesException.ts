import { HttpException } from '../Exceptions'

/**
 * HttpVariantAlsoNegotiatesException extends HttpException
 *
 * @class HttpVariantAlsoNegotiatesException
 */
class HttpVariantAlsoNegotiatesException extends HttpException {
  constructor() {
    super(506, 'Variant Also Negotiates')
  }
}

export default HttpVariantAlsoNegotiatesException