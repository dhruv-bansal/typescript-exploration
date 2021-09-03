export default class User {
  constructor(private name: string) {}

  getDetails(): User {
    return this;
  }
}

export class FakeUser extends User {
  constructor() {
    super("fakeUser");
  }
}
