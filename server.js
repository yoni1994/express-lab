// import modules
//require all your imports up at the top of the file
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as teamDb from './data/teams.js'

// Create Express app
//invoke express to create app
const app = express()


// Configure the app (app.set)
//set our view engine
app.set('view engine', 'ejs')
app.set(
    'views',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'))


// Mount Middleware (app.use)


// Mount routes

//localhost:3000
app.get('/', function(req, res) {
    res.redirect('/home')
})

//localhost:3000/home
app.get('/home', function(req, res) {
    res.render('home')
})

//localhost:3000/teams
app.get('/teams', function(req, res) {
    teamDb.find({}, function(error, teams) {
        res.render('teams/index', {
            teams: teams,
            error: error,
        })
    })
})

// Tell the app to listen on port 3000

app.listen(3001, function() {
  console.log('Listening on port 3001')
})