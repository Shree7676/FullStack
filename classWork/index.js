const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(bodyParser.json())

var claculatedSum = (num)=>{
    var count = 0;
    for (var x = 0; x <= num; x++) {
      count += x;
    }
    return count;
  };
  
app.get("/", (req, res) => {
    var sumOf = req.query.sumOf;
    var ans = claculatedSum(sumOf);
    // console.log(claculatedSum(sumOf).toString());
    var obj = {
      answer: ans,
    };
  res.send(obj);
});

app.post("/bodyData",(req,res)=>{
    var data = req.body.counter
    res.send({
      answer: claculatedSum(data),
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
  



