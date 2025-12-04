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
    console.log(req.user);
    if (!req.user.role != 'admin') {
        res.status(403).json({ message: "Access denied. Admins only." });
        return;
    }

    console.log("📥 Received item data:", req.body);
    
    const item = new Item(req.body);
    
    console.log("💾 Attempting to save item:", item.name);
    
    item.save().then((savedItem) => {
        console.log("✅ Item saved successfully:", savedItem.name);
        res.json({ 
            message: "Item saved successfully",
            item: savedItem
        });
    }).catch((error) => {
        console.log("❌ Error saving item:", error.message);
        res.status(500).json({ 
            message: "Error saving item",
            error: error.message 
        });
    });
}