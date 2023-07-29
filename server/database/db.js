import mongoose from "mongoose";
const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.ledvcoc.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser : true});
        console.log('Database Connected Successfully')
    } catch(error){
        console.log('Error While Connecting With The Database', error)
    }
}

export default Connection;