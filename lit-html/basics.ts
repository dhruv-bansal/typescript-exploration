import { html } from "lit-html";

class Company {
  name: string;
  catchPhrase: string;
  location: string;

  constructor(name: string, catchPhrase: string, location: string) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.location = location;
  }
}

const company = new Company("test", "test", "test");

const aTemplate = html`<h1>${company.name}</h1>`;

console.log(aTemplate.getHTML());
