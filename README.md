# Pariksha_Mitra
Data Analytics Backend for Pariksha Mitra project
# Pariksha Mitra

## Deployed Application Link:
You can access the deployed application at: [https://pariksha-mitra.onrender.com](https://pariksha-mitra.onrender.com)

Here's an expanded version of the README file with setup instructions for project:

# Pariksha Mitra - Backend Setup and Deployment

This repository contains the backend code for Pariksha Mitra, an educational platform that provides test results and performance analytics for students. The backend is built using Node.js, Express.js, and MongoDB.

### Table of Contents

1. Prerequisites
2. Installation
3. Configuration
4. Running the Application
5. API Endpoints
   - Chapters
   - Exercises
   - Students
   - Questions
   - Test Results
   - Analytics
6. Testing
7. Deployed Application Link
8. Postman/Swagger API Documentation
9. Contributing

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (either local or cloud-based like MongoDB Atlas)
- Postman (Optional but recommended for API testing)

## Installation

1. Clone the Repository

   Start by cloning the repository to your local machine.

   ```bash
   git clone https://github.com/AdityaLondhe5191/Pariksha_Mitra.git
   cd Pariksha_Mitra
   ```

2. Install Dependencies

   Install the required dependencies using npm.

   ```bash
   npm install
   ```

3. Set up MongoDB

   If you're using MongoDB Atlas (cloud), create a new cluster and generate a connection string. Replace the placeholder in the `.env` file.

   - **MongoDB Atlas**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to set up a free cluster and get the connection string.
   - **Local MongoDB**: If you're using a local MongoDB instance, ensure MongoDB is running on `mongodb://localhost:27017`.

4. Environment Variables

   Create a `.env` file in the root of your project (if it doesn't exist). Set up your environment variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/ParikshaMitra  # Local MongoDB URL
   PORT=10000  # Port to run the application
   ```

   - Replace `MONGODB_URI` with your actual MongoDB URI (whether local or Atlas).
   - You can change the `PORT` if necessary, but `10000` is recommended for consistency.

## Configuration

### Database Configuration

Ensure that MongoDB is running on your machine or through MongoDB Atlas.

- If using **MongoDB Atlas**, ensure the connection string provided in the `.env` file is correct, including the username, password, and database name.
- If using **local MongoDB**, you can keep the default connection string (`mongodb://localhost:27017/ParikshaMitra`).

## Running the Application

1. **Start the Server**

   After the installation and setup are complete, you can start the application by running the following command:

   ```bash
   npm start
   ```

   This will run the backend server at `http://localhost:10000`.

   If you wish to run the application in development mode (with hot reloading for changes), use the following command:

   ```bash
   npm run dev
   ```

2. **Verify the Server**

   Open your browser and navigate to `http://localhost:10000` to verify the server is running.

   You should see a response like:

   ```
   Server is running on http://localhost:10000
   MongoDB connected successfully
   ```

## API Endpoints

### 1. Chapters

Chapters represent the topics or sections of the course that students are studying.

- **Get All Chapters**: `GET /api/chapters/`
  - Returns: List of all chapters in the course.

- **Get Chapter by ID**: `GET /api/chapters/:id`
  - URL parameter: `id` (Chapter ID)
  - Returns: Specific chapter details.

- **Create Chapter**: `POST /api/chapters/`
  - Request body:
    ```json
    {
      "title": "Chapter 1: Introduction to Programming",
      "description": "This chapter covers basic programming concepts."
    }
    ```
  - Returns: Created chapter object.

- **Update Chapter**: `PUT /api/chapters/:id`
  - URL parameter: `id` (Chapter ID)
  - Request body:
    ```json
    {
      "title": "Chapter 1: Advanced Programming",
      "description": "Updated chapter description."
    }
    ```
  - Returns: Updated chapter object.

- **Delete Chapter**: `DELETE /api/chapters/:id`
  - URL parameter: `id` (Chapter ID)
  - Deletes a chapter by ID.

### 2. Exercises

Exercises are questions or tasks related to each chapter that students need to complete.

- **Create Exercise**: `POST /api/exercises/`
  - Request body:
    ```json
    {
      "chapterId": "chapterObjectId",
      "question": "What is the purpose of a variable in programming?",
      "answerOptions": ["To store data", "To perform calculations", "To write programs"],
      "correctAnswer": "To store data"
    }
    ```

- **Get All Exercises for a Chapter**: `GET /api/exercises/:chapterId`
  - URL parameter: `chapterId` (Chapter Object ID)
  - Returns: List of exercises related to the chapter.

- **Get Exercise by ID**: `GET /api/exercises/:id`
  - URL parameter: `id` (Exercise Object ID)
  - Returns: Specific exercise details.

### 3. Students

Students are individuals who take tests, complete exercises, and track their performance.

- **Create Student**: `POST /api/students/`
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
  - Returns: Created student object.

- **Get All Students**: `GET /api/students/`
  - Returns: List of all students.

- **Get Student by ID**: `GET /api/students/:id`
  - URL parameter: `id` (Student ID)
  - Returns: Student details by ID.

- **Update Student**: `PUT /api/students/:id`
  - URL parameter: `id` (Student ID)
  - Request body:
    ```json
    {
      "name": "Updated Name",
      "email": "updated@example.com"
    }
    ```

- **Delete Student**: `DELETE /api/students/:id`
  - URL parameter: `id` (Student ID)
  - Deletes a student by ID.

### 4. Questions

Questions are part of the exercises that are answered by students during tests.

- **Create Question**: `POST /api/questions/`
  - Request body:
    ```json
    {
      "exerciseId": "exerciseObjectId",
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5"],
      "correctAnswer": "4"
    }
    ```

- **Get Questions for an Exercise**: `GET /api/questions/:exerciseId`
  - URL parameter: `exerciseId` (Exercise Object ID)
  - Returns: List of questions for the given exercise.

### 5. Test Results

Test results track a student's performance in each test they take.

- **Create Test Result**: `POST /api/testresults/`
  - Request body:
    ```json
    {
      "studentId": "studentObjectId",
      "testId": "testObjectId",
      "score": 85
    }
    ```

- **Get Test Results by Student**: `GET /api/testresults/:studentId`
  - URL parameter: `studentId` (Student Object ID)
  - Returns: List of test results for the student.

- **Get Test Result by ID**: `GET /api/testresults/:id`
  - URL parameter: `id` (Test result Object ID)
  - Returns: Specific test result by ID.

### 6. Analytics

Analytics provides insights into student performance based on their test results.

- **Get Analytics by Student**: `GET /api/analytics/:studentId`
  - URL parameter: `studentId` (Student Object ID)
  - Returns: Analytics data like total tests, average score, etc.

## Testing

You can test the API endpoints using **Postman** or **cURL**.

- **Postman**: Download and install Postman (https://www.postman.com/downloads/). Use it to send GET, POST, PUT, DELETE requests to the backend API.
- **Swagger**: If you want to use Swagger for API documentation, you can set up a library like `swagger-jsdoc` to automatically generate and visualize the API.

### Example Using Postman:
1. **Create a New Student**:
   - Method: `POST`
   - URL: `https://pariksha-mitra.onrender.com/api/students`
   - Body (JSON):
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```

2. **Get Test Results for a Student**:
   - Method: `GET`
   - URL: `https://pariksha-mitra.onrender.com/api/students'

/:studentId`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Clone your fork.
3. Create a new branch for your feature.
4. Commit your changes.
5. Push your changes and create a pull request.


THANK YOU !!!
