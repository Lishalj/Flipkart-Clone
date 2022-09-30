import mongoose from "mongoose";

export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.48k3h.mongodb.net/Flipkart?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology : true , useNewUrlParser : true });
        console.log('Database connected successfully')
      
    } catch (error) {
        console.log('Error while connecting with database', error.message);
    }
};
  mongoose.connection.on("disconnected", () => {
            console.log("mongoDB disconnected!");
          });
export default Connection;