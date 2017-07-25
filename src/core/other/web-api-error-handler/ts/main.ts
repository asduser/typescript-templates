/// <reference path="ApiErrorHandler/Core.ts" />

// Use error handler to check input data.
let dispatcher = new ApiErrorHandler.Dispatcher();

// Create a special class for mock.
class MockResponse {
  constructor(public Status?: number, public Message?: string) {}
}

// Implement a custom logger handler.
class Logger implements ApiErrorHandler.ILogger {
  Show = (entity: any): void => {
    alert(entity);
    // console.log(entity);
  }
}

// Redefine standart message logger to custom.
dispatcher.Config.SetLogger(new Logger());

// Create mock data responses.
const connectionError = new MockResponse();
const serverError = new MockResponse(500, "Timeout expired. Database cannot run a procedure 'test-user-28'.");
const unAuthorized = new MockResponse(401, "Request was denied - unauthorized.");
const notFound = new MockResponse(404, "Not found.");

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
