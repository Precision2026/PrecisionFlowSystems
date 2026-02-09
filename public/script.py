import os
from PIL import Image

def convert_jpg_to_webp(directory):
    # Supported extensions
    valid_extensions = ('.jpg', '.jpeg', '.JPG', '.JPEG')

    # Check if directory exists
    if not os.path.exists(directory):
        print(f"Error: The directory {directory} does not exist.")
        return

    for filename in os.listdir(directory):
        if filename.endswith(valid_extensions):
            # Create paths
            img_path = os.path.join(directory, filename)
            
            # Define the new filename (e.g., image.jpg -> image.webp)
            base_filename = os.path.splitext(filename)[0]
            webp_path = os.path.join(directory, f"{base_filename}.webp")

            try:
                # Open the image
                with Image.open(img_path) as img:
                    # Convert and save
                    # If webp_path already exists, this replaces it
                    img.save(webp_path, "webp", quality=80)
                    print(f"Converted: {filename} -> {base_filename}.webp")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

# Usage
target_folder = "/Users/prabhatthapa/precisionflow/public/pipe-fittings" # Change this to your folder path
convert_jpg_to_webp(target_folder)