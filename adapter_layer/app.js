import express from 'express';
import 'dotenv/config.js';
import AuthRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
try {
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 4000}...`);
});
}catch(e){
    console.error('Error starting server:', e);
}

app.use('/auth', AuthRoutes);



    