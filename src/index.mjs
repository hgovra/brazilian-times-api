import express from 'express'
import cors from 'cors'

import business from './business.json'
import health from './health.json'
import sports from './sports.json'

const GROUP_NEWS = {
    business,
    health,
    sports
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.get('/api', function(req, res) {
    res.json({
        economy,
        technology,
        world
    })
})

app.get('/api/:subject', function(req, res) {
    const { subject } = req.params
    res.json(GROUP_NEWS[subject])
})

app.get('/api/:subject/:id', function(req, res) {
    const { subject, id } = req.params
    const allNews = GROUP_NEWS[subject]
    const news = allNews.find(news => news.id === id)
    res.json(news)
})

app.listen(PORT, function() {
    console.log(`Server running on ${PORT} PORT`)
})
