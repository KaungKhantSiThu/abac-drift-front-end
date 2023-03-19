const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

const connectionString = process.env.MONGODB_URL || "mongodb+srv://developer:pfHbRhhpaHHoIWfL@cluster0.bmqt335.mongodb.net/abac-drift"
//Get
router.get('/', async (req, res) => {
    const motorcycles = await loadMotorcyclesCollection();
    res.status(200).send(await motorcycles.find({}).toArray());
})

router.post('/', async (req, res) => {
    const motorcycles = await loadMotorcyclesCollection();
    await motorcycles.insertOne({
        title: req.body.title,
        price: req.body.price,
        gear: req.body.gear,
        mileage: req.body.mileage,
        engine: req.body.engine,
        year: req.body.year,
        manufacturer: req.body.manufacturer,
        imageURL: req.body.imageURL
    });

    res.status(201).send();
})

//delete
router.delete('/:id', async (req, res) => {
    const motorcycles = await loadMotorcyclesCollection();
    await motorcycles.deleteOne({_id: new  mongodb.ObjectId(req.params.id)})
    res.status(200).send();
})

async function loadMotorcyclesCollection() {
    const client = await mongodb.MongoClient.connect(connectionString, {
        useNewUrlParser: true
    });

    return client.db('abac-drift').collection('motorcycles');
}
module.exports = router;