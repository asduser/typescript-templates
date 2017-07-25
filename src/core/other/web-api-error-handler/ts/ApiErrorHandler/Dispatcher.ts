/// <reference path="Core.ts"/>

namespace ApiErrorHandler {

  export class Dispatcher implements IDispatcher {

    constructor() {
      this.Config = new ErrorHandlerConfig();
    }

    public Config: ErrorHandlerConfig;

    public isSuccess = (response?: any, headers?: any, config?: any): boolean => {

      if (!response) {
        this.Config.showErrors && this.Config.LogMessage(`Status: ${Message.ConnectionError}`);
        return false;
      }

      if (response.Status === State.ServerError) {
        this.Config.showErrors && this.Config.LogMessage(`Status: ${Message.ServerError}`);
        return false;
      }

      if (response.Status === State.UnAuthorized) {
        this.Config.showErrors && this.Config.LogMessage(`Server message: ${response.Message}`);
        return false;
      }

      if (response.Status === State.BadRequest) {
        this.Config.showErrors && this.Config.LogMessage(`Status: ${Message.BadRequest}. Server message: ${response.Message}`);
        return false;
      }

      if (response.Status === State.NotFound) {
        this.Config.showErrors && this.Config.LogMessage(`Status: ${Message.NotFound}. Server message: ${response.Message}`);
        return false;
      }

      return true;
    }

  }

  // Config to manage handler behaviour.
  class ErrorHandlerConfig {
    private Logger: ILogger = new DefaultLogger();
    public showErrors: boolean = true;

    public LogMessage = (Entity: any): void => {
      this.Logger.Show(Entity);
    }

    public SetLogger(logger: ILogger): void {
      this.Logger = logger;
    }
  }

  // Default logger to handle error messages.
  class DefaultLogger implements ILogger {
    public Show(Entity: any): void {
      console.error(Entity);
    }
  }

}
