const db = require('../config/db')
const bcrypt = require("bcryptjs");
class User {
  constructor(sid,sname,sem,branch,s_email, password) {
    this.sid = sid;
    this.sname = sname;
    this.sem = sem;
    this.branch = branch;
    this.s_email = s_email;
    this.s_pwd = password;
  }

  async save() {
    const salt = await bcrypt.genSalt(11);
    const secPass = await bcrypt.hash(this.s_pwd, salt);
    let sql = `insert into student(sid,sname,sem,branch,s_email, s_pwd) values('${this.sid}','${this.sname}','${this.sem}','${this.branch}','${this.s_email}','${secPass}')`;
    const [newPost, _] = await db.execute(sql);
    return newPost;
  }


  static findAll() {
    let sql="select * from student;"
    return db.execute(sql);
  }

  static findById(id){
    let sql =`select * from student where sid= '${id}';`
    return db.execute(sql)
  }
}

module.exports = User;
