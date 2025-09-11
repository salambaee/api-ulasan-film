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
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// GET /reviews/:id
app.get('/reviews/:id', (req, res)=> {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) {
        return res.status(404).json({message: 'Out of review index'});
    }
    res.status(200).json(review);
});

// POST /reviews
app.post('/reviews', (req, res) => {
    const newReview = {
        id: reviews.length + 1,
        film_id: req.body.film_id,
        user: req.body.user,
        rating: req.body.rating,
        comment: req.body.comment
    };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// PUT /reviews/:id
app.put('/reviews/:id', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) {
        return res.status(404).json({massege: 'Out of review index'});
    }

    if (req.body.film_id !== undefined) review.film_id = req.body.film_id;
    if (req.body.user !== undefined) review.user = req.body.user;
    if (req.body.rating !== undefined) review.rating = req.body.rating;
    if (req.body.comment !== undefined) review.comment = req.body.comment;

    res.status(200).json(review);
});

// DELETE /reviews/:id
app.delete('/reviews/:id', (req, res) => {
    const reviewIndex = reviews.findIndex(r => r.id === parseInt(req.params.id));
    if (reviewIndex === -1) {
        return res.status(404).json({message: "Review not found"});
    }
    const deleted = reviews.splice(reviewIndex, 1);
    res.json(deleted[0]);
});

const port = parseInt(process.env.PORT) || 3300;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});