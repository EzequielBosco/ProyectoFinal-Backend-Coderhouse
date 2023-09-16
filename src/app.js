const express = require('express')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const connectMongo = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))
app.use(cookieParser('secret'))
app.use(session({ secret:'secret', resave:false, saveUninitialized:true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

connectMongo()

module.exports = app