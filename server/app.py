from flask import Flask, request
from flask_cors import CORS
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/predict_price', methods=['POST'])
def predict_price():
    # Extract the features from the POST request
    bedrooms = int(request.json['bedrooms'])
    bathrooms = int(request.json['bathrooms'])
    surface = int(request.json['surface'])

    # Convert the features to a 2D array format
    X = np.array([[bedrooms, bathrooms, surface]])

    # Create a linear regression model
    model = LinearRegression()

    # Define the training data
    X_train = np.array([
        [3, 2, 1800],
        [4, 3, 2200],
        [2, 1, 1200],
        [5, 2, 3000],
        [3, 2, 1600],
        [4, 2, 2000],
        [3, 2, 1900],
        [2, 1, 1000],
        [4, 3, 2300],
        [3, 2, 1700],
        [3, 2, 2100],
        [4, 3, 2500],
        [2, 1, 1100],
        [5, 2, 3200],
        [3, 2, 1400],
        [4, 2, 1800],
        [3, 2, 2000],
        [2, 1, 900],
        [4, 3, 2600],
        [3, 2, 1500]
    ])
    y_train =[
        300000,
        400000,
        250000,
        500000,
        280000,
        350000,
        320000,
        200000,
        420000,
        290000,
        360000,
        430000,
        240000,
        550000,
        270000,
        380000,
        330000,
        190000,
        470000,
        310000
    ]

    # Train the model on the training data
    model.fit(X_train, y_train)

    # Make a prediction based on the extracted features
    y_pred = model.predict(X)

    # Return the predicted price as a JSON response
    return {'predicted_price': int(y_pred[0])}

if __name__ == '__main__':
    app.run(port=3000)
