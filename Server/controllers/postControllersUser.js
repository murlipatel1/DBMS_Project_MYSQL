const User = require('../models/User')

exports.getAllUsers= async(req ,res , next)=>{
    try{
        const posts = await User.findAll();
        res.status(200).json({posts})
    }catch(error){
        console.log(error)
    }
}

exports.createNewUser= async(req ,res , next)=>{
    let {sid,sname,sem,branch,s_email, s_pwd} = req.body

    let post = new User(sid,sname,sem,branch,s_email, s_pwd)

    post = await post.save()

    console.log(post)
    res.send("createNewUser")
}

exports.getUserById= async(req ,res , next)=>{
    try{
        let postId = req.params.id
    let [post , _] = await User.findById(postId)

    res.status(200).json({post})
    }catch(err){
        console.log(err)
    }
}