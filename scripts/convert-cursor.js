import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sharp(path.join(__dirname, '../public/crosshair.svg'))
  .resize(32, 32)
  .png()
  .toFile(path.join(__dirname, '../public/crosshair.png'))
  .then(() => console.log('Cursor converted successfully!'))
  .catch(err => console.error('Error converting cursor:', err)); 