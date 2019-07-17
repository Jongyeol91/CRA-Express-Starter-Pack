const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/employee", (req, res) => {
    const serverData = [
        { id: 1, firstName: "jongyeol", lastName: "park"},
        { id: 2, firstName: "seoyoung", lastName: "lee" },
        { id: 3, firstName: "jungkwon", lastName: "kim" },
    ]
   res.json(serverData);
});

app.post("/employee/new", (req, res) => {
    console.log(req.body.data);
});

app.listen(5000, (req, res) => {
    console.log("server start");
})