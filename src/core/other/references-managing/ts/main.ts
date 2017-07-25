/// <reference path="_manage.ts"/>
/// <reference path="_notification.ts"/>

module Dispatcher {

  // Create user with default constructor.
  var u1 = new User();

  // Create new admin and set responsibilities to him.
  var admin1 = new Admin();
  admin1.Responsibility = AdminDuty.Post | AdminDuty.Contacts;

  // Display some info.
  console.log(u1.getInfo());
  console.log(admin1, admin1.Responsibility);
  console.log(TIMEOUT_LIMIT);
  console.log(SupportedCodes);

}
