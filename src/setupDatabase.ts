import mongoose from "mongoose";

export default () => {
    const connect = () =>{
        mongoose.connect('mongodb://localhost:27017/khelnehaina-backend').
        then(()=>{
            console.log('Successfully connected to database.')
        })
        .catch((error => {
            console.log('Error connecting to db.', error);
        }));
    }
    connect();

    mongoose.connection.on('disconnected', connect);
}