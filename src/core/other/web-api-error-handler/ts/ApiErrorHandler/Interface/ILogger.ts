/// <reference path="../Core.ts"/>

namespace ApiErrorHandler {

  // Inherited class may contain either on of console methods or custom :void handler.
  export interface ILogger {
    Show(Entity: any): void;
  }

}
