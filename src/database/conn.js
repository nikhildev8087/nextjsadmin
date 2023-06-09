import mongoose from "mongoose";


const connectMongo = async() => {
    try{
    const {connection} = await mongoose.connect(process.env.NEXT_APP_MONGODB_CONNECTION_URL);

    if(connection.readyState === 1){
        return Promise.resolve(true)
    }

    }catch(err){
        return Promise.reject(err)
    }
}

export default connectMongo;