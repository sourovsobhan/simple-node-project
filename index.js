const express = require("express");
var cors = require('cors')
const app =  express();
app.use(cors())
app.use(express.json())
const port = 5000;



app.get("/",(req,res)=>{
    res.send("hello wow i am from second node js")
});
const users = [
    { id: 0, name: "sourov", email: "sourov@gmail.com", phone: "0178878787" },
    { id: 1, name: "sobhan", email: "sobhan@gmail.com", phone: "0178878787" },
    { id: 2, name: "sojib", email: "sojib@gmail.com", phone: "0178878783" },
    { id: 3, name: "sisir", email: "sisir@gmail.com", phone: "0178878783" },
    { id: 4, name: "sakib", email: "sakib@gmail.com", phone: "0178878782" },
    { id: 5, name: "sakil", email: "sakib@gmail.com", phone: "0178878782" },
  ];

  app.get("/users", (req, res) => {
    const search = req.query.search;
  
    if (search) {
      const searchResult = users.filter((user) =>
        user.name.toLocaleLowerCase().includes(search)
      );
      res.send(searchResult);
    } else {
      res.send(users);
    }
  });
  
app.post("/users",(req,res)=>{
  const newUser = req.body;
  newUser.id  = users.length;
  users.push(newUser);
  console.log("hitting the post",req.body);
  // res.send(json.stringify(newUser))
  res.json(newUser)
})






  app.get("/fruits", (req, res) => {
    res.send("yummy yummy fazli mango");
  });
  
  app.get("/fruits/mango/fazli", (req, res) => {
    res.send("yummy yummy fazli");
  });
  



  app.get("/users", (req, res) => {
    res.send(users);
  });

  app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    console.log(req.params.id);
  });
  



// app.get("/users/:id", (req,res)=>{
//     console.log(req.params.id)
// })



app.listen(port,() =>{
    console.log("listening to your port from",port)
})

