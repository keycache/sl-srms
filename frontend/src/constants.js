export const API_URL = import.meta.env.VITE_API_URL;

export const RESULT = "result",
  STUDENT = "student",
  COURSE = "course",
  SCORE = "score",
  SUCCESS = "success",
  ERROR = "error",
  NAME = "name",
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  DOB = "dateOfBirth",
  GRADES = ["", "A", "B", "C", "D", "E", "F"];

export const SUCCESS_ADD_STUDENT = "Successfully added student record",
  ERROR_ADD_STUDENT = "Failed to get student record(s)",
  ERROR_STUDENT_NAME = "First and Last Name cannot be empty.",
  ERROR_STUDENT_DOB = "Student's DOB can not be less than 10 years",
  BAD_RESPONSE = "Bad Response";
