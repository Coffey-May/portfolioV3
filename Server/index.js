import express from 'express';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello!")
})
app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})