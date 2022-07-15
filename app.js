const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
//var multer = require('multer');
  
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// var upload = multer({ storage: storage });


const PORT = process.env.PORT || 3000; 
const ConnectionString = process.env.ConnectionString ;


const app = express();
const productsRouter = require('./src/routers/productsRouter');
const userRouter = require('./src/routers/userRouter');


///////////////////
mongoose.connect(
  ConnectionString, 
  {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
  }
);

//console.log(chalk.blueBright(ConnectionString));
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log(`${chalk.blueBright("MongoDB Connected successfully")}`);
// });


///////////////////


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/products', productsRouter);
app.use('/users', userRouter);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index', { title: 'Emad Farming Company', data: [] });
});
app.get('/home', (req, res) => {
  res.render('index', { title: 'Emad Farming Company', data: [] });
});

const userModel = require('./src/models/user');

 


app.listen(PORT, () => {
  debug(`listening on port ${chalk.green(PORT)}`);
});
