/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface"




/**
 * Router Definition

 itemsRouter below is a mini-app:
 a middleware and routing system below
*/

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

//REDO get items

////itemsRouter

// GET items

itemsRouter.get("/", async  (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();
        res.status(200).send(items);
    } catch (e) {
        if (e instanceof Error) {
        res.status(500).send(e.message);
        } else {
            console.log('unexpected error D', e);
        }
    }

   /*try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }*/});
// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        const item: Item = await ItemService.find(id);

        if (item) {
            return res.status(200).send(item);
        }

        res.status(404).send("item not found");

    }catch (e) {
        if (e instanceof Error) {
        res.status(500).send(e.message);
        } else {
            console.log('unexpected error D', e);
        }
     }
});

// POST items
itemsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const item: BaseItem = req.body;
        const newItem = await ItemService.create(item);

        res.status(201).json(newItem);
    } catch (e) {
        if (e instanceof Error) {
        res.status(500).send(e.message);
    } else {
        console.log('unexpected error D', e)
    }
    }
});


// PUT items/:id
itemsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const itemUpdate: Item = req.body;
        const existingItem: Item = await ItemService.find(id);

        if (existingItem) {
            const updatedItem = await ItemService.update(id, itemUpdate);
            return res.status(200).json(updatedItem);
        }

        const newItem = await ItemService.create(itemUpdate);

        res.status(201).json(newItem);
    }  catch (e) {
        if (e instanceof Error) {
        res.status(500).send(e.message);
        } else {
            console.log('unexpected error D', e);
            }}
});


// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await ItemService.remove(id);

        res.sendStatus(204);
    } catch (e) {
        if (e instanceof Error) {
        res.status(500).send(e.message);
        } else {
            console.log('unexpected error D', e);
        }

    }});
