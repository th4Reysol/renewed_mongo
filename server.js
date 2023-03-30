const express = require('express');
const Books = require("./models/books")
const app = express();
const port = 3000;
const mongoose = require('mongoose');



app.get("api/v1/books", async(req,res)=>{
    try{
        const allBooks = await Books.find({});
        res.json(allBooks);
    }catch(err){
        console.log(err)
    }
})

// Mongoに登録する関数
function InputMongoData (){
    mongoose.connect(
        "mongodb+srv://thhisstory:FunairiFFF324@cluster0.ourgdrv.mongodb.net/?retryWrites=true&w=majority"  
        )
        .then(()=> {
            try{
                registerData()
                console.log("DB!!")
            }catch(err){
                console.log(err)
            }
        });
}

function registerData(){
    let bkData = new Books({
        title: "Jane Eyre",
        author: "Charlotte Bronte"
    })
    bkData.save()
}



// 実際に登録するAPI
app.get('/register', (req, res) => {
    InputMongoData();
    console.log("CREATE");
    res.status(200);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));