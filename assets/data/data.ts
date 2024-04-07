// data.ts

import Category from "../../src/types/category";
import Course from "../../src/types/course";
import User from "../../src/types/user";


// Dummy users
const users: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", enrolledCourses: ["1", "2"] },
  { id: "2", name: "Jane Smith", email: "jane@example.com", enrolledCourses: ["1"] },
  { id: "3", name: "Alice Johnson", email: "alice@example.com", enrolledCourses: ["2"] }
];

// Dummy courses
const courses: Course[] = [
  { 
    id: "1", 
    title: "Introduction to React Native", 
    description: "Learn the basics of React Native framework",
    chapterCount: 16, 
    authorId: "2", 
    category: "1", 
    usersEnrolled: ["1", "3"]
  },
  { 
    id: "2", 
    title: "Advanced JavaScript", 
    description: "Deep dive into JavaScript concepts", 
    chapterCount: 20,
    authorId: "3", 
    category: "1", 
    usersEnrolled: ["1", "2"]
  }
];

// Dummy categories
const categories: Category[] = [
    { id: "1", name: "Programming", color: "#FF5733" },
    { id: "2", name: "Web Development", color: "#33FFA5" },
    { id: "3", name: "Mobile Development", color: "#3366FF" }
  ];

export { users, courses, categories };
