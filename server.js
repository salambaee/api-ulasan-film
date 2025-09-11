const express = require('express');

const app = express();
app.use(express.json());

let reviews = [
    {
        id: 1,
        film_id: "",
        user: "Andi",
        rating: 5,
        comment: "Film animasi terbaik sepanjang masa!"
    }
]

// GET /status
app.get('/status', (req, res) => {
    res.status(200).json({message: 'Server is running'});
});
// GET /reviews
app.get('/review', (req, res) => {
    res.json(reviews);
});

// GET /reviews/:id
app.get('/review/:id', (req, res)=> {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) {
        return res.status(404).json({message: 'Out of review index'});
    }
    res.json(review);
});

const port = parseInt(process.env.PORT) || 3300;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});