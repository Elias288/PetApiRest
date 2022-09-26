const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.BDUSERNAME}:${process.env.BDPASSWORD}`
    + `@cluster0.3vbdspd.mongodb.net/${process.env.BDPASSWORD}?`
    + `retryWrites=true&w=majority`
    
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.Promise = global.Promise
mongoose.connect(uri, options, err => {
    if(err) console.log(err);
})
