const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    username: "octocat",
    name: "The Octocat",
    repoCount: 8,
    location: "San Francisco",
  },
  {
    id: 2,
    username: "torvalds",
    name: "Linus Torvalds",
    repoCount: 25,
    location: "Portland",
  },
  {
    id: 3,
    username: "gaearon",
    name: "Dan Abramov",
    repoCount: 50,
    location: "London",
  },
  {
    id: 4,
    username: "addyosmani",
    name: "Addy Osmani",
    repoCount: 42,
    location: "Mountain View",
  },
  {
    id: 5,
    username: "tj",
    name: "TJ Holowaychuk",
    repoCount: 150,
    location: "Victoria",
  },
];

// Exercise 2: Get all users
function fetchAllUserData(){
    return {users : users};
}
app.get("/users", (req, res) => {
    let response = fetchAllUserData();
    if(!response){
        res.status(404).json({ message: 'No users found' });
    }
    return res.status(200).json(response)
});

// Exercise 3: Get user by ID
function fetchUserById(id){
    let user = users.find(user => user.id === id);
    return {user : user};
}
app.get('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let response = fetchUserById(id)
    if(!response){
        res.status(404).json({ message: 'User id not found' });
    }
    return res.status(200).json(response)
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})