const db = require('../config/db')

class Post {
  constructor(id,title, body) {
    this.id =id;
    this.title = title;
    this.body = body;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDay();

    let createdate = `${yyyy}-${mm}-${dd}`;

    let sql = `insert into timetable ( sno , room_no, sem, branch, course_name, fid, day, time) values( '${this.sno}','${this.room_no}','${this.sem}', '${this.branch}','${this.course_name}','${this.fid}','${createdate}', '${this.time}')`;
    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static findAll() {
    let sql="select * from timetable;"
    return db.execute(sql);
  }

  static findById(id){
    let sql =`select * from timetable where id= ${id}`
    return db.execute(sql)
  }
}

module.exports = Post;
