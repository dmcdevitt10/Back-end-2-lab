const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

const PORT = 4004

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))