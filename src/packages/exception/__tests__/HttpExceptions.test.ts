import StatusCode from './StatusCode.data'
import {
  CodedHttpExceptions,
} from '../http-exceptions'
import { HttpException } from '../exceptions'

describe('http-exceptions Tests', () => {
  test('status code', () => {
    for (const code in StatusCode) {
      // @ts-ignore: index
      const CodeHttpException = CodedHttpExceptions[code]
      const e: HttpException = new CodeHttpException()
      // case: equal code
      expect(
        e.statusCode
      ).toBe(parseInt(code, 10))
    }
  })

  test('status name', () => {
    for (const code in StatusCode) {
      // @ts-ignore: index
      const CodeHttpException = CodedHttpExceptions[code]
      const e: HttpException = new CodeHttpException()
      // case: equal code
      expect(
        e.message
        // @ts-ignore: index
      ).toBe(StatusCode[code].replace(/HTTP/g, '').trim())
    }
  })

  test('class name', () => {
    for (const code in StatusCode) {
      // @ts-ignore: index
      const CodeHttpException = CodedHttpExceptions[code]
      const e: HttpException = new CodeHttpException()
      // @ts-ignore: index
      const correctClassName = `Http${StatusCode[code].replace(/\s/g, '').replace(/HTTP/g, '')}Exception`
      // case: equal code
      expect(
        e.name
        // @ts-ignore: index
      ).toBe(correctClassName)
    }
  })

  test('inherit', () => {
    for (const code in StatusCode) {
      // @ts-ignore: index
      class InheritException extends CodedHttpExceptions[code] {}
      const e = new InheritException()
      // case: name
      expect(
        e.name
      ).toBe('InheritException')
      // case: code
      expect(
        e.statusCode
      ).toBe(parseInt(code, 10))
      // case: stack
      expect(
        e.stack
      ).toBeTruthy()
    }
  })
})