import express from 'express';
import { getAllItems, saveItem, getGoodItems, searchItems } from '../controllers/itemController.js';

const itemRouter = express.Router();

// Get all items
itemRouter.get("/", getAllItems);
itemRouter.get("/:name", searchItems);
itemRouter.get("/good", getGoodItems);

// Save new item
itemRouter.post("/", saveItem);



export default itemRouter;