import axios from 'axios';

async function predictArticleType(year, gender, season, subCategory) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/predict', {
      year,
      gender,
      season,
      subCategory,
    });
    return response.data.prediction;
  } catch (error) {
    console.error('Error predicting article type:', error);
    return 'Error making prediction';
  }
}

export default predictArticleType;
