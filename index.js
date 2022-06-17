const express= require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const router= require('./routes/movies');
const route = require('./routes/theatre');
const routers = require('./routes/seating');
const app = express();
app.use(express.json());

app.use(cors())

app.use('/', router);
app.use('/', route);
app.use('/', routers);
mongoose.connect(
    "mongodb+srv://Gsathiya:capstoneproject@cluster0.ktemn.mongodb.net/bookmyshow?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Database connected successfully")
    })
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword:String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({email: email}, (err, user) => {
       if(user) {
          if(password === user.password){
              res.send({message: "Logged in successfully", user: user})
          }else{
              res.send({message: "Password did not match"})
          }
       }else{
           res.send({message:"User not registered"})
       }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User Already Registered" })
        } else {

            const user = new User({
                name,
                email,
                password,
                confirmPassword
            })
            
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Registered successfully" })
                }
            })
        }
    })
})

app.listen(8000, () => {
    console.log("Server running on 8000")
})