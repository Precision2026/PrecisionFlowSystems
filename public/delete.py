import os
folder = "/Users/prabhatthapa/precisionflow/public/tube-fittings"


for file in os.listdir(folder):
    if file.endswith("jpg"):
        os.remove(os.path.join(folder, file))
        
