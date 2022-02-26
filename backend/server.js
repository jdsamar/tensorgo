const express = require('express');
const User = require('./models/Usermodel');
const asyncHandle = require('express-async-handler');
const connectDb = require('./config/db');
connectDb();

const app = express();
app.use(express.json());

app.get('/api', asyncHandle(async (req, res) => {
    const users = await User.find({})
    res.json(users)
}))

app.get('/api/:id', asyncHandle(async (req, res) => {
    const temp = req.params.id
    const usersDetail = await User.findById(temp)
    if(usersDetail){
        res.json(usersDetail)
    }else{
        res.status(404).json({message:"Product not Found"})

    }
}))

app.put('/api/:id', asyncHandle(async (req, res) => {
    let jsonData = req.body;
    await User.findOneAndUpdate({_id: req.params.id} ,{name: jsonData.name, email: jsonData.email, gender: jsonData.gender, status: jsonData.status}, {new: true})
}))


app.listen(5000, () => {
    console.log(`Server Running on 5000`)
})