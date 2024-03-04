import express from "express";
import path from 'path'

const app = express();

const products = [
  { title: "iphone", price: 1999999 },
  { title: "oneplus", price: 12000 },
  { title: "sony", price: 182000 },
];

app.get("/", (req, res) => {
  //   console.log("This is home route");
  // res.end("Jha se aaya hai vhi wapas laut ja beta")
  //   res.send("<h1>This Your Response</h1>");
//   res.json({
//     kuchhbhi: "kuchh kuchh",
//     marvel: "thor",
//     cricket: "virat kohli",
//     joBhiBhejo: "bhai",
//   });

// console.log(path.resolve())

// const dir = path.resolve()

// const url = path.join(dir,'./index.html')
// console.log(url)

// res.json({product:products[2]})
//  res.sendFile('./index.html')

const dir = path.resolve();
const url = path.join(dir, "./index.html");

res.sendFile(url)
});

app.listen(3000, () => console.log("server is running on port 3000"));
