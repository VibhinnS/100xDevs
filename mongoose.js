const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vibhinnsinghal:njxEou0Ojec16ZBD@harriputtar.tnnyr.mongodb.net/?retryWrites=true&w=majority&appName=harriputtar")

const User = mongoose.model('Users', {name: String, email: String, password: String});

const kitty = new User({
    name: 'Vibhinn',
    email: 'vibhinnsinghal@gmail.com',
    password: '123456'
});
kitty.save().then(() => console.log('hello world'))
