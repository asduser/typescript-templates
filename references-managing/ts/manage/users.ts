/// <reference path="../_manage.ts"/>

module Dispatcher {

  export interface IUser {
      Name: string;
      Age: number;
  }

  export class User implements IUser {
      constructor(public Name: string = "Unnamed", public Age: number = 20) { }
      public getInfo = (): string => {
          return `My name is ${this.Name}, age is ${this.Age}`;
      }
  }

}
