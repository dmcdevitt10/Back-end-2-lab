const houses = require('../server/db.json')
let houseId = 4

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const {id} = req.params
        const idx = houses.findIndex(house => house.id === +id)
        if(idx >= 0){
            houses.splice(idx, 1);
            res.status(200).send(houses);
        }else{
            res.sendStatus(404)
        }
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        if(!address || !price || !imageURL){
            res.sendStatus(404)
        }
        const copy = {...req.body, id: houseId}
        houses.push(copy)
        houseId++
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        const idx = houses.findIndex(house => house.id === +id)
        if(type === 'plus'){
            houses[idx].price = houses[idx].price + 10000;
            res.status(200).send(houses);
        }else{
            if(houses[idx].price <= 10000){
                houses[idx].price = 0;
                res.status(200).send(houses);
            }else{
                houses[idx].price = houses[idx].price - 10000;
                res.status(200).send(houses);
            }
        }
    }
}