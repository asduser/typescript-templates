/// <reference path="../Core.ts"/>

namespace ApiErrorHandler {

  export const Message = {
    BadRequest: "Request has a lexical error in URI.",
    UnAuthorized: "Authorization token has been expired.",
    NotFound: "An attempt to send a request to non-exsting route.",
    ServerError: "Unexpected server error - 500.",
    ConnectionError: "Cannot establish connection with server."
  };

}
