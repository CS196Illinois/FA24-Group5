import React from 'react';
//import './shoes.css'; // Optional, for styling
import { useState } from 'react';

function Shoes({ predictArticleType }) {
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');
  const [subCategory, setSubCategory] = useState(30);
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async (e) => {
    e.preventDefault();
    const result = await predictArticleType(year, gender, season, subCategory);
    setPrediction(result);
  };

  return (
    <div className="shoes-page">
      <h1>👕 shoes</h1>
      <p>Predict article types using our AI model!</p>
      
      <form onSubmit={handlePredict}>
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </label>
        <label>
          Gender ('Boys': 0, 'Girls': 1, 'Men': 2, 'Unisex': 3, 'Women': 4):
          <input
            type="number"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </label>
        <label>
          Season ('Fall': 0, 'Spring': 1, 'Summer': 2, 'Winter': 3):
          <input
            type="number"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            required
          />
        </label>
        
        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <h2>Predicted Article Type:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}

export default Shoes;