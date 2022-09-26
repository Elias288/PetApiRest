const app = require('./app')

app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

app.listen(app.get('port'), () => {
    console.log("server up in: " + app.get('port'))
})