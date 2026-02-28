from sklearn.linear_model import LinearRegression
import numpy as np

# Datos de ejemplo
X = np.array([[1], [2], [3], [4] ])
y = np.array([2, 4, 6, 8])

#Modelo de regresión lineal
model = LinearRegression()

#entrenar el modelo
model.fit(X, y)

# Hacer predicciones
predicciones = model.predict(X)
print("Predicciones:", predicciones)

#normalizar los datos
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
