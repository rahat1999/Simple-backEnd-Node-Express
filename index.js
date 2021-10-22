const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = 5000

app.get('/', (req, res) => {
    res.send(" i am excicited to learn node !")
});

const users = [
    { id: 0, name: 'ratul', email: 'ratul@gmail.com', number: '0122032938' },
    { id: 1, name: 'qkib', email: 'qkib@gmail.com', number: '0122032938' },
    { id: 2, name: 'sohel', email: 'sohel@gmail.com', number: '0122032938' },
    { id: 3, name: 'sangida', email: 'sangida@gmail.com', number: '0122032938' },
    { id: 4, name: 'prithu', email: 'prithu@gmail.com', number: '0122032938' },
]


//use query paramiter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    } else {
        // console.log(search)
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser)) এটা বা নিচের টা
    res.json(newUser)
})

//dynamic Api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['magos', 'oranges', 'bannas', 'apple'])
});
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yeammi yammi tok fozli')
});

app.listen(port, () => {
    console.log("Listening to port", port)
});