import mongoose from "mongoose";
const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-p8xmtmk-shard-00-00.4e4f1w1.mongodb.net:27017,ac-p8xmtmk-shard-00-01.4e4f1w1.mongodb.net:27017,ac-p8xmtmk-shard-00-02.4e4f1w1.mongodb.net:27017/?ssl=true&replicaSet=atlas-9yes4q-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully')
    } catch(error){
        console.log('Error While Connecting With The Database', error)
    }
}

export default Connection;