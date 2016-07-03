/// <reference path="../Core.ts"/>
var ApiErrorHandler;
(function (ApiErrorHandler) {
    (function (State) {
        State[State["BadRequest"] = 400] = "BadRequest";
        State[State["UnAuthorized"] = 401] = "UnAuthorized";
        State[State["NotFound"] = 404] = "NotFound";
        State[State["ServerError"] = 500] = "ServerError";
    })(ApiErrorHandler.State || (ApiErrorHandler.State = {}));
    var State = ApiErrorHandler.State;
})(ApiErrorHandler || (ApiErrorHandler = {}));
/// <reference path="../Core.ts"/>
var ApiErrorHandler;
(function (ApiErrorHandler) {
    ApiErrorHandler.Message = {
        BadRequest: "Request has a lexical error in URI.",
        UnAuthorized: "Authorization token has been expired.",
        NotFound: "An attempt to send a request to non-exsting route.",
        ServerError: "Unexpected server error - 500.",
        ConnectionError: "Cannot establish connection with server."
    };
})(ApiErrorHandler || (ApiErrorHandler = {}));
/// <reference path="../Core.ts"/>
/// <reference path="../Core.ts"/>
/// <reference path="Core.ts"/>
var ApiErrorHandler;
(function (ApiErrorHandler) {
    var Dispatcher = (function () {
        function Dispatcher() {
            var _this = this;
            this.isSuccess = function (response, headers, config) {
                if (!response) {
                    _this.Config.showErrors && _this.Config.LogMessage("Status: " + ApiErrorHandler.Message.ConnectionError);
                    return false;
                }
                if (response.Status === ApiErrorHandler.State.ServerError) {
                    _this.Config.showErrors && _this.Config.LogMessage("Status: " + ApiErrorHandler.Message.ServerError);
                    return false;
                }
                if (response.Status === ApiErrorHandler.State.UnAuthorized) {
                    _this.Config.showErrors && _this.Config.LogMessage("Server message: " + response.Message);
                    return false;
                }
                if (response.Status === ApiErrorHandler.State.BadRequest) {
                    _this.Config.showErrors && _this.Config.LogMessage("Status: " + ApiErrorHandler.Message.BadRequest + ". Server message: " + response.Message);
                    return false;
                }
                if (response.Status === ApiErrorHandler.State.NotFound) {
                    _this.Config.showErrors && _this.Config.LogMessage("Status: " + ApiErrorHandler.Message.NotFound + ". Server message: " + response.Message);
                    return false;
                }
                return true;
            };
            this.Config = new ErrorHandlerConfig();
        }
        return Dispatcher;
    }());
    ApiErrorHandler.Dispatcher = Dispatcher;
    // Config to manage handler behaviour.
    var ErrorHandlerConfig = (function () {
        function ErrorHandlerConfig() {
            var _this = this;
            this.Logger = new DefaultLogger();
            this.showErrors = true;
            this.LogMessage = function (Entity) {
                _this.Logger.Show(Entity);
            };
        }
        ErrorHandlerConfig.prototype.SetLogger = function (logger) {
            this.Logger = logger;
        };
        return ErrorHandlerConfig;
    }());
    // Default logger to handle error messages.
    var DefaultLogger = (function () {
        function DefaultLogger() {
        }
        DefaultLogger.prototype.Show = function (Entity) {
            console.error(Entity);
        };
        return DefaultLogger;
    }());
})(ApiErrorHandler || (ApiErrorHandler = {}));
/// <reference path="Enum/State.ts"/>
/// <reference path="Enum/Message.ts"/>
/// <reference path="Interface/ILogger.ts"/>
/// <reference path="Interface/IDispatcher.ts"/>
/// <reference path="Dispatcher.ts"/>
/// <reference path="ApiErrorHandler/Core.ts" />
// Use error handler to check input data.
var dispatcher = new ApiErrorHandler.Dispatcher();
// Create a special class for mock.
var MockResponse = (function () {
    function MockResponse(Status, Message) {
        this.Status = Status;
        this.Message = Message;
    }
    return MockResponse;
}());
// Implement a custom logger handler.
var Logger = (function () {
    function Logger() {
        this.Show = function (entity) {
            alert(entity);
            // console.log(entity);
        };
    }
    return Logger;
}());
// Redefine standart message logger to custom.
dispatcher.Config.SetLogger(new Logger());
// Create mock data responses.
var connectionError = new MockResponse();
var serverError = new MockResponse(500, "Timeout expired. Database cannot run a procedure 'test-user-28'.");
var unAuthorized = new MockResponse(401, "Request was denied - unauthorized.");
var notFound = new MockResponse(404, "Not found.");
// CONNETCION ERROR behavior
dispatcher.isSuccess();
// SERVER ERROR behavior
dispatcher.isSuccess(serverError);
// After this all error messages below will be ignored.
dispatcher.Config.showErrors = false;
// UNAUTHORIZED ERROR behavior
dispatcher.isSuccess(unAuthorized);
// NOT FOUND ERROR behavior
dispatcher.isSuccess(notFound);
//# sourceMappingURL=output.js.map