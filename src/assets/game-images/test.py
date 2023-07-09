import os

def remove_spaces(directory):
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        if os.path.isfile(file_path):
            new_filename = filename.replace(" ", "")
            new_file_path = os.path.join(directory, new_filename)
            os.rename(file_path, new_file_path)
            print(f"Renamed {filename} to {new_filename}")

# Get the current directory
current_directory = os.getcwd()

# Remove spaces from file names
remove_spaces(current_directory)
