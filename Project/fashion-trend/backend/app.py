from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
app = Flask(__name__)
CORS(app, origins="http://localhost:3000")
rf_year = joblib.load('rf_year_model.pkl')
encoded_info = joblib.load('encoded_info.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the request
        data = request.get_json()
        year = data['year']
        gender = data['gender']
        season = data['season']
        subCategory = data['subCategory']
        
        # Prepare the input features (make sure to match the same order as during training)
        input_features = [[year, gender, season, subCategory]]
        
        # Predict the article type
        prediction = rf_year.predict(input_features)[0]
        
        # Convert the predicted label back to the original category using encoded_info
        predicted_article_type = list(encoded_info['articleType'].keys())[prediction]
        
        # Return the prediction as a JSON response
        return jsonify({'prediction': predicted_article_type})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)