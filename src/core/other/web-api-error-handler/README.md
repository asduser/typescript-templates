# webApi error handler (TypeScript)

## Demo

<a href="http://asduser.github.io/examples/ts-webApi-error-handler/index.html"> Demo page </a> | <a href="http://asduser.github.io/typescript/web-api-error-handler"> Article on web-site </a>

## About

Flexible and scalable TypeScript module to catch error messages from http-response. It allows you to solve the following cases:

1. Decrease number of the common issues in development mode.
2. Customize handlers as you wish.
3. Separate logical code blocks into a positive and negative scenarios.
4. Save your time for debugging.

## How to use

Module structure:

![project architecture](http://asduser.github.io/images/post/ts-api-error-handler-1-project.png)

All functionality contains inside **Dispatcher.ts** class. To start with create an instance.

Supposing we have response type in JSON-format and in the next style:

```javascript
{
  "Data": {}, // some data
  "Status": // server status (200, 400, 401, 404, 500 etc.),
  "Message": // error message from server if something failed
}
```

To validatate that response use:

```js
$http.get(someUrl).success((response, status, headers, config) => {
  if( dispatcher.isSuccess(response) ) {
    // actions when succeeded
  }
  // ...
```

> *isSuccess* method returns boolean value (true\false) depending on validation result. And then you may either continue code execution or break it.

It doesn't matter which type has a response Status, the rules for all of them will be declared into the special Dispatcher class.

## Example

```ts
// create a new dispatcher instance
let dispatcher = new ApiErrorHandler.Dispatcher();

// response - is JSON object received from server-side

if ( dispatcher.isSuccess(response)  ) {
  // do smth then ...
}
```

## Configuration

To specify a new validation rule put it inside **isSuccess** method within **Dispatcher** class.

```ts
// 500 error
if (response.Status === State.ServerError) {
  this.Config.showErrors && this.Config.LogMessage(`Status: ${Message.ServerError}`);
  return false;
}

// 401 error
if (response.Status === State.UnAuthorized) {
  this.Config.showErrors && this.Config.LogMessage(`Server message: ${response.Message}`);
  return false;
}
```

**dispatcher** instance (we created it above) has a special Config, which allows you to:

- set "showErrors" (boolean) status - *by default is true*;
- change message handler (void) - *by default console.log*.

```typescript
class AlertLogger implements ApiErrorHandler.ILogger {
  Show = (entity: any): void => {
    alert(entity);
  }
}

// Redefine standart message logger to custom.
dispatcher.Config.SetLogger(new Logger());
```

And now all messages will be shown inside standart window.alert window.

![project architecture](http://asduser.github.io/images/post/ts-api-error-handler-2-alert1.png)

![project architecture](http://asduser.github.io/images/post/ts-api-error-handler-2-alert2.png)

In production mode you will probably need to hide any error message:

```ts
// After this all error messages below will be ignored.
dispatcher.Config.showErrors = false;
```

For any other details see **main.ts** file in project.
