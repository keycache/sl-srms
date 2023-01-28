import React, { useEffect, useState } from "react";
import { post, get } from "../helper/api";
import Table from "../components/sidebar/Table";
import { Toaster } from "react-hot-toast";
import { notify } from "../helper/notification";
import {
  FIRST_NAME,
  LAST_NAME,
  NAME,
  RESULT,
  GRADES,
  STUDENT,
  COURSE,
  SCORE,
} from "../constants";

const API_URL = import.meta.env.VITE_API_URL;
const STUDENTS = "studentId",
  COURSES = "courseId",
  SCORES = "score";

const FORM_FIELDS = [STUDENTS, COURSES, SCORES];

export default function Results() {
  const [errorMessage, setErrorMessage] = useState("");
  const [resultData, setResultData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  const processResult = (item) => {
    return {
      [STUDENTS]: `${item[STUDENT][FIRST_NAME]} ${item[STUDENT][LAST_NAME]}`,
      [COURSES]: `${item[COURSE][NAME]}`,
      [SCORES]: `${item[SCORE]}`,
    };
  };
  useEffect(() => {
    // TODO handle the errors gracefully

    get(`${API_URL}/${RESULT}/`)
      .then((res) => res.json())
      .then((out) => {
        const data = out.data.map((item) => {
          return processResult(item);
        });
        setResultData(data);
      });

    get(`${API_URL}/${STUDENT}/`)
      .then((res) => res.json())
      .then((out) => {
        setStudentData([
          { id: "", [FIRST_NAME]: "", [LAST_NAME]: "" },
          ...structuredClone(out.data),
        ]);
      });

    get(`${API_URL}/${COURSE}/`)
      .then((res) => res.json())
      .then((out) => {
        setCourseData([{ id: "", [NAME]: "" }, ...structuredClone(out.data)]);
      });
  }, []);

  const validate = (data) => {
    return data?.[STUDENTS] && data?.[COURSES] && data?.[SCORES];
  };

  const clearForm = (form) => {
    FORM_FIELDS.forEach((item) => (form[item].value = null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      [STUDENTS]: e.target[STUDENTS].value,
      [COURSES]: e.target[COURSES].value,
      [SCORES]: e.target[SCORES].value,
    };

    if (validate(data)) {
      setErrorMessage("");
      post(`${API_URL}/${RESULT}/`, data)
        .then((res) => res.json())
        .then((out) => {
          notify("Successfully added result record", "success");
          const data = processResult(out.data);
          setResultData([...structuredClone(resultData), data]);
          clearForm(e.target);
        });
    } else {
      setErrorMessage("Student and/or Course and/or Score\ncannot be empty.");
    }
  };

  const getStudentOptions = () => {
    return studentData.map((student) => {
      return (
        <option id={student.id} value={student.id}>
          {student[FIRST_NAME]} {student[LAST_NAME]}
        </option>
      );
    });
  };

  return (
    <div className="flex flex-col items-center h-screen space-y-10 w-4/5">
      <div className="bold font-extrabold">Add Result</div>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-y-2 align-middle">
          <div className="flex-col space-x-3">
            <label htmlFor={STUDENTS}>Student</label>
            <select className="border-2 w-48" id={STUDENTS} htmlFor={STUDENTS}>
              {getStudentOptions()}
            </select>
          </div>
          <div className="flex-col space-x-3">
            <label htmlFor={COURSES}>Course</label>
            <select className="border-2 w-48" id={COURSES} htmlFor={COURSES}>
              {courseData.map((course) => {
                return (
                  <option id={course.id} value={course.id}>
                    {course[NAME]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex-col space-x-3">
            <label htmlFor={SCORES}>Score</label>
            <select className="border-2 w-48" id={SCORES} htmlFor={SCORES}>
              {GRADES.map((grade) => {
                return (
                  <option id={grade} value={grade}>
                    {grade}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            className="border-2 bg-blue-600 text-white px-3 py-1 rounded-lg"
            type="submit"
          />
          <div className="bold text-red-500 whitespace-pre h-14">
            {errorMessage}
          </div>
        </div>
      </form>
      <div>
        <div className="text-4xl font-bold underline">
          {" "}
          All student's results
        </div>
        <Table tbodyData={resultData} theadData={FORM_FIELDS} />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
