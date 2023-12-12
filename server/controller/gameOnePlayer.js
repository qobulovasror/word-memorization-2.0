import { a1, a2, b1, b2, c1 } from "../data/freqWords";

async function getWords(req, res) {
  try {
    
    const result = [];
    for (let i = 0; i <= c; i++) {
      let i = Math.floor(Math.random() * (data.length - 1 - 0 + 1) + 0);
      result.push(data[i]);
    }
    res.json({});
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

export { getWords };
