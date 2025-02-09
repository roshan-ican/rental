import mongoose from "mongoose";

const connectDB = (url) => {
    const mongoDB = process.env.MONGODB_URL;
    console.log(mongoDB, "test__irl");
    mongoose.set("strictQuery", true);

    mongoose
        .connect(mongoDB)
        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log(error));
};

export default connectDB;
