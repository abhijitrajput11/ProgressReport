const express = require('express');
const mg = require('mongoose')


mg.connect("mongodb://127.0.0.1:27017/Marksheet")
  .then(() => {
  console.log('connected');
})
    .catch((err) => { console.log(err) })



const uSchema = mg.Schema({
      BRANCH:String,
      ROLLNO: Number,
      BatchDiv: String,
      RANK:Number,
      STUDENTNAME: String,
      DMT1: Number,
      COAT1: Number,
      DMT2: Number,
      FCSP2T1: Number,
      FSD2T1: Number,
      FSD2T2: Number,
      COAT2: Number,
      TOCT1: Number,
      TOCT2: Number,
      FCSP2T2: Number,
      FCSP2T3: Number,
      COAT3: Number,
      FSD2T3: Number,
      TOCT3: Number,
      DMT3: Number,
      FCSP2T4: Number,
      COAT4: Number,
      FSD2T4: Number,
      TOCT4: Number,
      DMT4: Number,
      Total: Number
    })

    const person = mg.model('marks',uSchema)


//----default mongo syntax

// const userSchema = new mongoose.Schema({
//     ROLLNO: Number,
//     BATCH: String
// });

// const User = mongoose.model('User', userSchema);
//-----------

const app = express();
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json())//console me req.body undefined print krega isilia iska use hua
//req ka body part directly allow nai krta h
app.use(bodyParser.urlencoded({ extended: false }));


// const StudentSchema = new mongoose.Schema({
//   RANK: Number,
//   BRANCH: String,
//   ROLLNO: Number,
//   BatchDiv: String,
//   STUDENTNAME: String,
//   DMT1: Number,
//   COAT1: Number,    
//   Total: Number,
// });
// const Student = mongoose.model('Mark', StudentSchema);

// app.get('/api/Mark/:batch/:roll', async (req, res) => {
//   const { BATCH, ROLLNO } = req.params;
//   try {
//     const student = await Student.findOne({ BatchDiv: BATCH, ROLLNO: ROLLNO });
//     res.json(student);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

app.post('/check', async(req, res) => {
  const roll = req.body.ROLLNO
  const batch = req.body.BATCH
  const result = await person.find({ROLLNO:roll,BatchDiv:batch})
  res.json(result)
})


  // let user = new User();
  // user.ROLLNO = req.body.ROLLNO;
  // user.BATCH = req.body.BATCH;
  // const doc = await user.save();

app.listen(7098)