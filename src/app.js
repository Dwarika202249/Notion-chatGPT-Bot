import express from 'express';
import dotenv from 'dotenv';
import notionRoutes from './routes/notion.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/notion', notionRoutes);

// Health check
app.get('/', (req, res) => res.send('✨ Notion CRUD API ready to roll'));

export default app;
