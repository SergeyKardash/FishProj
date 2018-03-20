export class User {
  public username: string;
  public email: string;
  public password: string;
  public uid: string;
  public role: string;


  constructor (username: string, email: string, password: string, uid: string,  role: string = 'member') {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.uid = uid;
  }
}
