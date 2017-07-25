/// <reference path="../Core.ts"/>

namespace ApiErrorHandler {

  export enum State {
    BadRequest = 400,
    UnAuthorized = 401,
    NotFound = 404,
    ServerError = 500
  }

}
