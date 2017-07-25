/// <reference path="../Core.ts"/>

namespace ApiErrorHandler {

  export interface IDispatcher {
    isSuccess(response: any, headers?: any, config?: any): boolean;
  }

}
