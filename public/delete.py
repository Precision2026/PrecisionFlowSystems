import os
folder = "/Users/prabhatthapa/precisionflow/public/pipe-fittings"


for file in os.listdir(folder):
    if file.endswith("jpg"):
        os.remove(os.path.join(folder, file))
        print(f"removed {file}")
        
