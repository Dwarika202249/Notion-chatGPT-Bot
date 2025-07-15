import express from 'express';
import {
  getPages,
  createPage,
  updatePage,
  deletePage,
} from '../controllers/notion.controller.js';

const router = express.Router();

router.get('/pages', getPages);
router.post('/pages', createPage);
router.patch('/pages/:id', updatePage);
router.delete('/pages/:id', deletePage);

export default router;
