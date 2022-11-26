import express from 'express';
import cors from 'cors';

import { handleOrders } from './controllers/handleOrders.js';

const app = express();

app.use(express.json());
app.use(cors());
                
app.post('/', handleOrders); 

app.listen(process.env.PORT || 8800, () => {
    console.log('server is working properly');
});
