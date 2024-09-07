const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"
const app = express()

//define port
const port = 3000

//read JSON from body
app.use(express.json())

//user array
const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "HS"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman Singh"
    },
    {
        username: "abc@gmail.com",
        password: "1234567",
        name: "ABC"
    }
]

function userExists(username, password) {
    
    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
            break;
        }
    }
    return userExists;
}

app.post('/signin', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "DNE"
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword)
    return res.json({
        token,
    })
})

app.get('/users', function(req, res) {
    const token = req.headers.authorization
    try {
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username
        return res.status(200).json({
            msg: "Valid Response!"
        })
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid Token"
        });
    }
});


// const schema = zod.array(zod.number())
// const userData = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(zod.literal("US"))
// })

// const fxn1 = () => {
//     return null;
// }

// const fxn2 = () => {
//     return null;
// }

// const middlewares = [express.json(), fxn1, fxn2]
// let app = express()
// app.use(express.json())
// app.post('/health-checkup', ...middlewares, function(req, res) {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)
//     if (response["success"] == true) {
//         res.send(response["data"])
//     }
//     else {
//         res.status(411)
//     }
// })
app.listen(port, () => {
    console.log("Server active!");
})
