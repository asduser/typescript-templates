/// <reference path="../_manage.ts"/>

module Dispatcher {

  export class Admin {
    Name: string;
    Responsibility: AdminDuty
  }

  export enum AdminDuty {
    Post = 1,
    News = 2,
    Contacts = 4,
    Comments = 8
  }

}
