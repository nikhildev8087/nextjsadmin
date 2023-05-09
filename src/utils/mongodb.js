import { MongoClient } from "mongodb";

const uri = "mongodb+srv://nikhilb:UEUrvJscZfkM6bwG@cluster0.rbddxld.mongodb.net";

const client = new MongoClient(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

export async  function connectToDatabase() {
    try{
        // if(!client.isConnected()) 
        await client.connect();
        const db = client.db('test1');
        // console.log("database =>", db)
        return db;
    }catch(err){
        console.log(err)
    }
}


