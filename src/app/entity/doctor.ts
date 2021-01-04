export class Doctor {
  docId!: number;
  userName: string;
  password: string;
  fName: string;
  lName: string;
  age: number;
  dept: string;
  pos: string;
  email: string;

  constructor(docId: number, userName: string, password: string, fName: string, lName: string, age: number, dept: string, pos: string,
              email: string) {
    this.docId = docId;
    this.userName = userName;
    this.password = password;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.dept = dept;
    this.pos = pos;
    this.email = email;
  }
}
