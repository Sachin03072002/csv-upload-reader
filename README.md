# CSVReader

CSVReader is a web application that allows users to upload CSV files and view the details of the uploaded file.

## Features

- Upload a CSV file
- View details of the uploaded file
- Extract and display CSV file information
- Delete the file

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sachin03072002/csv-upload-reader.git
Navigate to the project directory:

bash
Copy code
cd csvreader
Install the dependencies:

bash
Copy code
npm install
Set up the MongoDB connection:

Ensure you have MongoDB installed and running on your machine.
Update the MongoDB connection string in config.js file located in the project root directory.
Start the application:

bash
Copy code
npm start
Open your web browser and visit http://localhost:3000 to access the CSVReader application.

Usage
On the home page, you will see a file upload form.
Click on the "Choose files" button or drag and drop a CSV file into the file drop area.
Once the file is selected, the file name will be displayed in the form.
Click on the "Upload" button to upload the file.
After successful upload, the uploaded file will be listed in the "Uploaded Files" section.
You can view the file details such as the file name, date, and time of upload.
To view the contents of the uploaded file, click on the "View" button.
To delete an uploaded file, click on the "Delete" button.
Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

License
This project is licensed under the MIT License.
