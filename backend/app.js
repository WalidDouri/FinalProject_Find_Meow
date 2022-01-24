const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const signupRouter = require('./routes/signup');
const searchRouter = require('./routes/search');
const loginRouter = require('./routes/login');
const smsRouter = require('./routes/sms');
const commentRouter = require('./routes/comment');
const mapDisplayRouter = require("./routes/map");
// const dashboardRouter = require('./routes/dashboard');

// const mypageRouter = require('./routes/mypage');
const catFormsRouter = require('./routes/catForms');


const app = express();
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const cors = require('cors');
const router = require('./routes/search');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);

// ### CREATE ROUTES HERE 

app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/signup', signupRouter(db));
app.use('/api/search', searchRouter);
app.use('/api/login', loginRouter(db));
app.use('/api/comment', commentRouter);
app.use('/api/sms', smsRouter(db)); //for test

app.use('/api/mypage', mypageRouter(db));
<<<<<<< HEAD
app.use("/map", mapDisplayRouter);
=======
// app.use("/map", mapDisplayRoutes(db));
// app.use('/api/mypage', mypageRouter(db));
app.use('/api/catforms', catFormsRouter(db));

>>>>>>> d10bbae00615318154c8ff00bd608137a7530a55



app.post('/report-pet', (req, res) => {
  const { description, image, cat_name, gender, last_seen_date, last_seen_address, last_seen_city, last_seen_postal_code, status, age } = req.body

  console.log("OVER HERE~~~~~~~~~", req.body);
  db.query(`
  INSERT INTO cat_forms ( 
    cat_name,
      gender,
      age,
      last_seen_date,
      last_seen_address,
      last_seen_city,
      last_seen_postal_code,
      status,
      image,
      description)
    
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;`,
    [cat_name,
      gender,
      age,
      last_seen_date,
      last_seen_address,
      last_seen_city,
      last_seen_postal_code,
      status,
      image,
      description
    ])
    .then((data) => {
      // res.json(submit);
      res.status(200);
      res.send(data);
    })
    .catch(error => {
      console.error(error)
    })
})

// app.get("/maps", (req, res) => {
//   console.log(req.query);
//   res.render("mapTest", req.query);

// });



module.exports = app;