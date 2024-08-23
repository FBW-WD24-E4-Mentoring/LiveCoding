
Student Gradebook Management SystemObjective:  
Design a system that enables teachers to manage student records and their respective grades. Task:  
You will create a simple gradebook system by implementing the following features: 1. Data Structure Setup:  
- Create two arrays:  
- `students`: This array will store student objects, each containing the following properties:  
- `id`: A unique identifier for the student.  
- `name`: The student's name.  
- `grades`: This array will store grade objects, each containing the following properties:  
- `studentId`: The `id` of the student to whom the grade belongs.  
- `grade`: The actual grade, represented as a numerical value. 2. Implement the Following Functions:***a) Add a Student:***  
- ***Function Name:*** `addStudent`  
- ***Input:*** A single parameter: the `name` of the student (string).  
- ***Output:*** Returns the newly created student object.  
- ***Action:***  
- Create a new student object with a unique `id`.  
- Add the student object to the `students` array.  
- Increment the `id` for the next student.  
- Return the newly added student object.***b) Add a Grade for a Student:***  
- ***Function Name:*** `addGrade`  
- ***Input:*** Two parameters: `studentId` (number), and `grade` (number).  
- ***Output:*** Returns a success message: `"Grade added successfully!"`.  
- ***Action:***  
- Create a grade object that links the `studentId` to the `grade`.  
- Add this grade object to the `grades` array.***c) Calculate the Average Grade for a Student:***  
- ***Function Name:*** `calculateAverage`  
- ***Input:*** A single parameter: `studentId` (number).  
- ***Output:*** Returns the average grade (number) for the specified student, or a message if no grades are found: `"No grades available for this student."`.  
- ***Action:***  
- Retrieve all grades associated with the provided `studentId` from the `grades` array.  
- Calculate the average of these grades.  
- Return the calculated average.***d) List All Students with Their Average Grades:***  
- ***Function Name:*** `listStudentsWithAverageGrades`  
- ***Output:*** Returns an array of objects, where each object contains:  
- `name`: The student's name.  
- `averageGrade`: The student's average grade.  
- ***Action:***  
- For each student in the `students` array, calculate their average grade using the `calculateAverage` function.  
- Create an object containing the student's `name` and their `averageGrade`.  
- Return an array of these objects, one for each student.