/* eslint-disable @typescript-eslint/no-unused-vars */
import { IHttpRequest, IHttpResponse } from '../protocols/http'
import { IController } from '../protocols/controller'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { IEmailValidator } from '../protocols/emailValidator'
import { InvalidParamError } from '../errors/invalid-param-error'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator

  constructor (emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)

    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
