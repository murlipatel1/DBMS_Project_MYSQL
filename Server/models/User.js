const db = require('../config/db')

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
    // let d = new Date();
    // let yyyy = d.getFullYear();
    // let mm = d.getMonth() + 1;
    // let dd = d.getDay();

    // let createdate = `${yyyy}-${mm}-${dd}`;

    let sql = `insert into student(sid,sname,sem,branch,s_email, s_pwd) values('${this.sid}','${this.sname}','${this.sem}','${this.branch}','${this.s_email}','${this.s_pwd}')`;

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
