import Item from "../models/item.js";

// Get all items
export function getAllItems(req, res) {
    Item.find().then((items) => {
        res.json(items);
    }).catch((error) => {
        res.status(500).json({ 
            message: "Error retrieving items",
            error: error.message 
        });
    });
}

// Get good items (rating >= 4)
export function getGoodItems(req, res) {
    Item.find({ rating: { $gte: 4 } }).then((items) => {
        res.json(items);
    }).catch((error) => {
        res.status(500).json({ 
            message: "Error retrieving good items",
            error: error.message 
        });
    });
}

// Search items by name
export function searchItems(req, res) {
    const ItemName = req.params.name;

    Item.find({
        name: { $regex: ItemName, $options: 'i' }
    }).then((items) => {
        res.json(items);
    }).catch((error) => {
        res.status(500).json({ 
            message: "Error searching items",
            error: error.message 
        });
    });
}

// Save new item
export function saveItem(req, res) {
    const item = new Item(req.body);
    item.save().then(() => {
        res.json({ message: "Item saved successfully" });
    }).catch((error) => {
        res.status(500).json({ 
            message: "Error saving item",
            error: error.message 
        });
    });
}