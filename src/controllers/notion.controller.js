import notion from '../services/notion.service.js';
import { success, error } from '../utils/response.util.js';

export const getPages = async (req, res) => {
  try {
    const response = await notion.post(`databases/${process.env.NOTION_DATABASE_ID}/query`);

    const results = response.data.results;

    const pages = results.map(page => ({
      id: page.id,
      created_time: page.created_time,
      last_edited_time: page.last_edited_time,
      properties: page.properties
    }));

    return success(res, pages, 'Fetched Notion pages successfully');
  } catch (err) {
    return error(res, err, 'Failed to fetch pages from Notion');
  }
};

export const createPage = async (req, res) => {
  try {
    const { name, status, priority, notes } = req.body;

    const payload = {
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        Status: {
          select: { name: status }
        },
        Priority: {
          select: { name: priority }
        },
        Description: {
          rich_text: [
            {
              text: {
                content: description
              }
            }
          ]
        }
      }
    };

    const response = await notion.post('/pages', payload);

    return success(res, response.data, 'Page created in Notion successfully');
  } catch (err) {
    return error(res, err, 'Failed to create page in Notion');
  }
};


// Placeholder exports for future use
export const updatePage = () => {};
export const deletePage = () => {};
