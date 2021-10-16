// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IHttpRequest, IHttpResponse } from './http'

export interface IController{
  handle (httpRequest: IHttpRequest): IHttpResponse
}
