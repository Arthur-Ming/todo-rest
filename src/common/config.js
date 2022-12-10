import dotenv from 'dotenv';
import path from 'path';
import * as url from 'url';
//eslint-disable-next-line Unexpected token
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const PORT = process.env.PORT;
export const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
