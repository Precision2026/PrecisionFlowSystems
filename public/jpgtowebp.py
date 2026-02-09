import os
from PIL import Image

def convert_to_webp(directory):
    # Support both lowercase and uppercase extensions
    extensions = (".jpg", ".jpeg", ".JPG", ".JPEG")

    for filename in os.listdir(directory):
        if filename.endswith(extensions):
            # Create the file paths
            base_name = os.path.splitext(filename)[0]
            input_path = os.path.join(directory, filename)
            output_path = os.path.join(directory, f"{base_name}.webp")

            try:
                with Image.open(input_path) as img:
                    # 'quality' can be adjusted (0-100). 80 is a good balance.
                    img.save(output_path, "webp", quality=80)
                    print(f"Success: {filename} -> {base_name}.webp")
            except Exception as e:
                print(f"Error converting {filename}: {e}")

# Usage
folder_path = "./pipe-fittings"
convert_to_webp(folder_path)