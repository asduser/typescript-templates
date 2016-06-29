/// <reference path="../_manage.ts"/>
var Dispatcher;
(function (Dispatcher) {
    var User = (function () {
        function User(Name, Age) {
            var _this = this;
            if (Name === void 0) { Name = "Unnamed"; }
            if (Age === void 0) { Age = 20; }
            this.Name = Name;
            this.Age = Age;
            this.getInfo = function () {
                return "My name is " + _this.Name + ", age is " + _this.Age;
            };
        }
        return User;
    }());
    Dispatcher.User = User;
})(Dispatcher || (Dispatcher = {}));
/// <reference path="../_manage.ts"/>
var Dispatcher;
(function (Dispatcher) {
    var Admin = (function () {
        function Admin() {
        }
        return Admin;
    }());
    Dispatcher.Admin = Admin;
    (function (AdminDuty) {
        AdminDuty[AdminDuty["Post"] = 1] = "Post";
        AdminDuty[AdminDuty["News"] = 2] = "News";
        AdminDuty[AdminDuty["Contacts"] = 4] = "Contacts";
        AdminDuty[AdminDuty["Comments"] = 8] = "Comments";
    })(Dispatcher.AdminDuty || (Dispatcher.AdminDuty = {}));
    var AdminDuty = Dispatcher.AdminDuty;
})(Dispatcher || (Dispatcher = {}));
/// <reference path="manage/users.ts"/>
/// <reference path="manage/admins.ts"/>
/// <reference path="../_notification.ts"/>
var Dispatcher;
(function (Dispatcher) {
    Dispatcher.SupportedCodes = ["+3", "+7", "+4"];
})(Dispatcher || (Dispatcher = {}));
/// <reference path="../_notification.ts"/>
var Dispatcher;
(function (Dispatcher) {
    Dispatcher.TIMEOUT_LIMIT = 1000;
})(Dispatcher || (Dispatcher = {}));
/// <reference path="./notification/sms-notification.ts"/>
/// <reference path="./notification/email-notification.ts"/>
/// <reference path="_manage.ts"/>
/// <reference path="_notification.ts"/>
var Dispatcher;
(function (Dispatcher) {
    // Create user with default constructor.
    var u1 = new Dispatcher.User();
    // Create new admin and set responsibilities to him.
    var admin1 = new Dispatcher.Admin();
    admin1.Responsibility = Dispatcher.AdminDuty.Post | Dispatcher.AdminDuty.Contacts;
    // Display some info.
    console.log(u1.getInfo());
    console.log(admin1, admin1.Responsibility);
    console.log(Dispatcher.TIMEOUT_LIMIT);
    console.log(Dispatcher.SupportedCodes);
})(Dispatcher || (Dispatcher = {}));
