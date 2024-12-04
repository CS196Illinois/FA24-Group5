import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings as wr
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, precision_score, recall_score, ConfusionMatrixDisplay
from sklearn.model_selection import RandomizedSearchCV, train_test_split
from scipy.stats import randint
from sklearn.preprocessing import LabelEncoder

df = pd.read_csv('./styles.csv', on_bad_lines='skip')
df.head()

df = df.dropna()
df.isnull().sum()


# Dictionary to hold encoded mappings for each categorical column
encoded_info = {}

# Encode each categorical column and save the mapping in encoded_info
for column in df.select_dtypes(include=['object']).columns:
    # Initialize a new LabelEncoder for each column
    label_encoder = LabelEncoder()
    # Fit and transform the column data
    df[column] = label_encoder.fit_transform(df[column])
    # Store the mapping of original values to encoded values for the column
    encoded_info[column] = dict(zip(label_encoder.classes_, label_encoder.transform(label_encoder.classes_)))

# Print encoded_info to see mappings
print(encoded_info)
# Train a new model with only the 'year' column as the feature
X_year = df[['year', 'season', 'gender', 'subCategory']]  # Only using 'year' as the feature
y = df['articleType']   # Target remains 'articleType'

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X_year, y, test_size=0.2)

import joblib  # Import joblib to save and load the model

# Train the RandomForest model
rf_year = RandomForestClassifier()
rf_year.fit(X_train, y_train)

# Save the trained model to a file
joblib.dump(rf_year, 'rf_year_model.pkl')

# Optionally, you can save the encoded mappings as well
joblib.dump(encoded_info, 'encoded_info.pkl')

# Check accuracy
y_pred = rf_year.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)
