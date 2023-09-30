const fs = require("fs");
const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();
app.use(bodyParser.json());

app.listen(process.env.PORT || 7000, async () => {
  console.log("listening on port", 7000 || process.env.PORT);
});

app.get("/", (req, res) => {
  // Badway
  // fs.readFilestre("./files/bigfile.txt", (err, data) => {
  //   if(err){
  //       console.log
  //       res.end('sth went wrong!')
  //       return;
  //   }
  //   res.end(data);
  // });
  let rs=fs.createReadStream("./files/bigfile.txt")

  rs.on('data',(chunk)=>{
    res.write("chunk###\n\n"+chunk)
    res.end();
  })

  rs.on('error',(err)=>{
    res.status(500).end(err.message)
  })
  
});
