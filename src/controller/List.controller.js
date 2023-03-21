import { createItem } from "../services/Item.service.js"

const postList = async(req,res) => {
    let itemData = req.body
    try {
        let item = await createItem(itemData.name, itemData.description, itemData.price, itemData.idBudget)
        res.status(200).json({item})
    } catch (error) {
        res.status(503).json({ message:`An error has ocurred: ${error}` })
    }
}

export { postList }