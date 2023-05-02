const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());

app.get('/',(req, res)=>{
    res.send('Server is running on the vercel.....');
})
const chefData=require("./data.json");
const port=5000;
app.get("/allChefData", (req, res)=>{
    res.send(chefData);
})

app.get("/allChefData/:id",(req, res)=>{
    const id=req.params.id;
    const chef=chefData.find(data=>data.id==id);
    res.send({chef});
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});