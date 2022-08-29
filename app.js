var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // Este es Inicio. Se borra el usersRouter de abajo si no se usa
var lasChacrasRouter = require('./routes/las-chacras');
var contactoRouter = require('./routes/contacto');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // Este es Inicio. Se borra el usersRouter de abajo si no se usa. // Metodo Controlador
app.use('/las-chacras', lasChacrasRouter); // Metodo Controlador
app.use('/contacto', contactoRouter); // Metodo Controlador

app.get('/cabanas', function(req,res){
  res.send('Bienvenido a la pagina de Cabañas')
}) // Metodo Ruta

app.get('/servicios', function(req,res){
  res.send('Bienvenido a la pagina de Servicios')
}) // Metodo Ruta

app.get('/galeria', function(req,res){
  res.send('Bienvenido a la pagina de Galeria')
}) // Metodo Ruta



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
