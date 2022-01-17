const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db)
const cors = require('cors')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);


// ### CREATE ROUTES HERE 

app.use('/api/users', usersRouter(dbHelpers));


app.post('/report-pet/submit-form/create', (req, res) => {
  const [description, image, cat_name, gender, last_seen_date, last_seen_address, last_seen_city, last_seen_postal_code, status] = req.body

  console.log("OVER HERE~~~~~~~~~", req.body)
  db.query(`
  INSERT INTO cat_forms ( 
    description,  
    image,
    cat_name,
    gender,
    last_seen_date,
    last_seen_address,
    last_seen_city,
    last_seen_postal_code,
    status)
    
    VALUES($1,$2,$3,to_timestamp($4),$5,$6,$7,$8) RETURNING *;`,
    [description,
      image,
      cat_name,
      gender,
      last_seen_date,
      last_seen_address,
      last_seen_city,
      last_seen_postal_code,
      status
    ])
    .then(() => {
      res.json();
    })
    .catch(error => { console.error(error) })
})



module.exports = app;
