import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../Server/data/db.json');

const DEFAULT_COLLECTIONS = [
  {
    id: "col1",
    title: "MARINE PLYWOOD",
    subtitle: "Strong. Durable. Reliable.",
    image: ""
  },
  {
    id: "col2",
    title: "VENEERS",
    subtitle: "Natural Beauty. Perfect Finish",
    image: ""
  },
  {
    id: "col3",
    title: "LAMINATES",
    subtitle: "Style That Stands Out",
    image: ""
  },
  {
    id: "col4",
    title: "HARDWARE FITTINGS",
    subtitle: "Precision in Every Detail",
    image: ""
  },
  {
    id: "col5",
    title: "DOORS & ACCESSORIES",
    subtitle: "Complete Your Interior",
    image: ""
  }
];

const readDB = () => {
  try {
    if (!fs.existsSync(dbPath)) {
      return { offers: [], collections: DEFAULT_COLLECTIONS };
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    const parsed = JSON.parse(data);
    if (!parsed.collections) {
      parsed.collections = DEFAULT_COLLECTIONS;
    }
    return parsed;
  } catch (error) {
    console.error('Error reading DB:', error);
    return { offers: [], collections: DEFAULT_COLLECTIONS };
  }
};

const writeDB = (data) => {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing DB:', error);
  }
};

// GET /api/collections
export const getCollections = (req, res) => {
  const db = readDB();
  res.json(db.collections || DEFAULT_COLLECTIONS);
};

// PUT /api/collections/:id
export const updateCollection = (req, res) => {
  try {
    const id = req.params.id;
    const { title, subtitle, image } = req.body;
    const db = readDB();
    
    db.collections = db.collections || DEFAULT_COLLECTIONS;
    const index = db.collections.findIndex(item => item.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Collection item not found' });
    }
    
    db.collections[index] = {
      ...db.collections[index],
      title: title !== undefined ? title : db.collections[index].title,
      subtitle: subtitle !== undefined ? subtitle : db.collections[index].subtitle,
      image: image !== undefined ? image : db.collections[index].image
    };
    
    writeDB(db);
    res.json(db.collections[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
