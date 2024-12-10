# Pariksha Mitra
Data Analytics Backend for Pariksha Mitra project

## Deployed Application Link:
You can access the deployed application at: [https://pariksha-mitra.onrender.com](https://pariksha-mitra.onrender.com)
to view other parameters you can go through this links: https://pariksha-mitra.onrender.com/api/students , https://pariksha-mitra.onrender.com/api/chapters , https://pariksha-mitra.onrender.com/api/exercises , https://pariksha-mitra.onrender.com/api/questions

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

   - **MongoDB Atlas**: Go to [MongoDB Atlas] to set up a free cluster and get the connection string.
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
      "phone": "1023456789"
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

- **Postman**: Download and install Postman. Use it to send GET, POST, PUT, DELETE requests to the backend API.
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
       "phone": "1023456789"
     }
     ```

2. **Get Test Results for a Student**:
   - Method: `GET`
   - URL: `https://pariksha-mitra.onrender.com/api/students'

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Clone your fork.
3. Create a new branch for your feature.
4. Commit your changes.
5. Push your changes and create a pull request.


### 1. **Data Architecture Document:**

#### Introduction:
The data architecture document describes the structure and flow of data within the Pariksha Mitra system. It outlines how data will be stored, accessed, and processed, ensuring consistency, integrity, and scalability.

#### System Overview:
- **Pariksha Mitra** is an educational platform where students take tests, and performance analytics are generated.
- **Core Components:**
  - **Student Profiles**: Stores personal and academic details of students.
  - **Chapters**: Contains the structure of study materials and topics.
  - **Exercises**: Definitions and details of exercises tied to chapters.
  - **Questions**: A pool of questions for tests, organized by difficulty or subject.
  - **Test Results**: Stores individual test results and associated performance metrics.
  - **Analytics**: Aggregated data about the student's overall performance across tests.
  
#### Data Flow:
1. **Student Data Flow**:
   - Students register and create their profiles.
   - Their details are stored in a `students` collection.
   - Students can attempt various exercises and tests, generating test results that are linked to their profile.
   
2. **Question/Exercise Data Flow**:
   - Exercises are linked to specific chapters.
   - Questions are pulled from the question bank to be used in test generation.
   
3. **Test Results & Analytics Data Flow**:
   - Test results are created when a student completes a test, and stored in a `testResults` collection.
   - Analytics data is generated based on the student's performance and stored in the `analytics` collection.

#### Data Security:
- Sensitive data (such as student details) will be encrypted using AES-256 encryption.
- Authentication and authorization will be managed using JWT for secure access to APIs.

---

### 2. **MongoDB/NoSQL Schema Designs:**

#### **1. Student Schema**:
```js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  testResults: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TestResult' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);
```

#### **2. TestResult Schema**:
```js
const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true }
});

module.exports = mongoose.model('TestResult', testResultSchema);
```

#### **3. Analytics Schema**:
```js
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  performanceData: {
    totalTests: { type: Number },
    averageScore: { type: Number },
  },
}, { timestamps: true });

module.exports = mongoose.model('Analytics', analyticsSchema);
```

#### **4. Chapter Schema**:
```js
const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]
});

module.exports = mongoose.model('Chapter', chapterSchema);
```

#### **5. Exercise Schema**:
```js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chapter: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

module.exports = mongoose.model('Exercise', exerciseSchema);
```

#### **6. Question Schema**:
```js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String }],
  correctAnswer: { type: String },
  difficultyLevel: { type: String, enum: ['easy', 'medium', 'hard'] },
});

module.exports = mongoose.model('Question', questionSchema);
```

---

### 3. **Data Flow Diagrams (DFD):**

#### **Level 0 DFD (Context Diagram)**:
                  +----------------+
                  |     Students    |
                  +-------+--------+
                          |
                          |
                          v
                  +----------------+
                  |   Register User |
                  +----------------+
                          |
                          |
                          v
                  +----------------+
                  |       Admin     |
                  +----------------+
                          |
                          |
                          v
                  +--------------------------+
                  | Create and Attempt Tests |
                  +--------------------------+
                          |
                          |
                          v
                  +----------------------------+
                  | View Results and Analytics |
                  +----------------------------+


#### **Level 1 DFD (Detailed Diagram)**:
                  +--------------------------+
                  |      Student Management   |
                  |--------------------------|
                  | - Register Students       |
                  | - Update Profiles         |
                  | - Manage Test Results     |
                  +-----------+--------------+
                              |
                              |
                              v
                    +------------------+
                    |   Test Management |
                    |-------------------|
                    | - Create Tests    |
                    | - Score Tests     |
                    | - Evaluate Tests  |
                    +-----------+------+
                                |
                                |
                                v
                    +-----------------------+
                    |   Analytics Generation |
                    |------------------------|
                    | - Calculate Metrics    |
                    | - Generate Reports     |
                    +-----------------------+

#### **Level 2 DFD (Data Store Interaction)**:
                  +--------------------------+
                  |      Student Management   |
                  +--------------------------+
                  | - Register Students       |
                  | - Update Profiles         |
                  | - Manage Test Results     |
                  +-----------+--------------+
                              |
                              |
                              v
                  +---------------+        +------------+
                  |   Students    |<-------|   Tests    |
                  +---------------+        +------------+
                  | - Student ID  |        | - Test ID  |
                  | - Name        |        | - Test Info|
                  | - Profile Data|        +------------+
                  +---------------+
                              |
                              |
                              v
                    +------------------+
                    |   Test Management |
                    +------------------+
                    | - Create Tests    |
                    | - Score Tests     |
                    | - Evaluate Tests   |
                    +-----------+------+
                                |
                                |
                                v
                    +-------------------+
                    |   TestResults      |
                    +-------------------+
                    | - Result ID       |
                    | - Student ID      |
                    | - Score           |
                    +-------------------+
                                |
                                |
                                v
                    +-------------------------+
                    |   Analytics Generation   |
                    +-------------------------+
                    | - Calculate Metrics      |
                    | - Generate Reports       |
                    +-----------+-------------+
                                |
                                |
                                v
                    +-----------------+
                    |    Analytics     |
                    +-----------------+
                    | - Report ID      |
                    | - Metrics Data   |
                    +-----------------+

### 4. **Performance Optimization Recommendations:**

#### **Indexing**:
- **Student Collection**: Index the `email` field for faster queries.
  ```js
  studentSchema.index({ email: 1 }, { unique: true });
  ```
- **TestResult Collection**: Index the `studentId` and `testId` fields to speed up retrieval of a student's results.
  ```js
  testResultSchema.index({ student: 1, testId: 1 });
  ```
- **Analytics Collection**: Index the `student` field for quick access to analytics data for a particular student.
  ```js
  analyticsSchema.index({ student: 1 });
  ```

#### **Data Caching**:
- Use Redis or in-memory caching to store frequently accessed data, such as student profiles or test results, to reduce database load.

#### **Database Sharding**:
- If the application grows, implement sharding across multiple databases based on student IDs or test IDs to distribute data and improve scalability.

#### **Query Optimization**:
- Use `select` to fetch only the necessary fields to avoid over-fetching data:
  ```js
  TestResult.find({ student: req.params.studentId }).select('score date');
  ```

#### **Load Balancing**:
- Utilize load balancing techniques for scaling the application when handling multiple requests simultaneously, ensuring high availability.

---

THANK YOU !!!
