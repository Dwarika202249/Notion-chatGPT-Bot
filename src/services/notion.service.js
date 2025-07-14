import axios from 'axios';

const notion = axios.create({
  baseURL: 'https://api.notion.com/v1/',
  headers: {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': process.env.NOTION_VERSION,
    'Content-Type': 'application/json'
  }
});

export default notion;
