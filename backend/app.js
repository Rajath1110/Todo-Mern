import express from 'express';
import connect from './connection/connect.js';
import auth from './routes/auth.js'
import list from './routes/list.js'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('home page');
});

app.use('/api/v1',auth);
app.use('/api/v1',list);

const startServer = async () => {
    await connect(); // Connect to MongoDB before starting the server

    app.listen(1000, () => {
        console.log('Server started at port 1000');
    });
};

startServer();
