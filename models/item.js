import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    originalPrice: Number,
    rating: Number,
    reviews: Number,
    image: String,
    description: String
});

const Item = mongoose.model("items", itemSchema);

export default Item;
