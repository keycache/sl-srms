import React, { useEffect, useState } from "react";
import { post, get, handleResponse } from "../helper/api";
import Table from "../components/sidebar/Table";
import { Toaster } from "react-hot-toast";
import { notify } from "../helper/notification";
import {
  ERROR,
  ERROR_ADD_STUDENT,
  ERROR_STUDENT_DOB,
  ERROR_STUDENT_NAME,
  STUDENT,
  SUCCESS,
  SUCCESS_ADD_STUDENT,
  FIRST_NAME,
  LAST_NAME,
  DOB,
  API_URL,
} from "../constants";

const FORM_FIELDS = [FIRST_NAME, LAST_NAME, DOB];

export default function Students() {
  const [errorMessage, setErrorMessage] = useState("");
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // TODO handle the errors gracefully

    get(`${API_URL}/${STUDENT}/`)
      .then((res) => {
        const [message, response] = handleResponse(res);
        if (message) {
          notify(ERROR_ADD_STUDENT, ERROR);
        } else {
          return response.json();
        }
      })
      .then((out) => {
        out && setStudentData(out.data);
      })
      .catch((error) => {
        notify(ERROR_ADD_STUDENT, ERROR);
      });
  }, []);

  const validate = (data) => {
    return (
      data?.firstName &&
      data?.lastName &&
      data?.dateOfBirth &&
      new Date(new Date().setFullYear(new Date().getFullYear() - 10)) >=
        new Date(data.dateOfBirth)
    );
  };

  const clearForm = (form) => {
    FORM_FIELDS.forEach((item) => (form[item].value = null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // does not work. need to investigate
    // const fd = new FormData(e.target)
    const data = {
      [FIRST_NAME]: e.target[FIRST_NAME].value,
      [LAST_NAME]: e.target[LAST_NAME].value,
      [DOB]: e.target[DOB].value,
    };

    if (validate(data)) {
      setErrorMessage("");
      post(`${API_URL}/${STUDENT}/`, data)
        .then((res) => res.json())
        .then((out) => {
          notify(SUCCESS_ADD_STUDENT, SUCCESS);
          setStudentData([...structuredClone(studentData), out.data]);
          clearForm(e.target);
        });
    } else {
      setErrorMessage(`${ERROR_STUDENT_NAME}\n${ERROR_STUDENT_DOB}`);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen space-y-10 w-4/5">
      <div className="bold font-extrabold">Add student</div>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-y-2 align-middle">
          <div className="flex-col space-x-3">
            <label htmlFor="firstName">First Name</label>
            <input className="border-2" name="firstName" type={"text"}></input>
          </div>
          <div className="flex-col space-x-3">
            <label htmlFor="lastName">Last Name</label>
            <input className="border-2" name="lastName" type={"text"}></input>
          </div>
          <div className="flex-col space-x-3">
            <label htmlFor={DOB}>Date of Birth</label>
            <input className="border-2" name={DOB} type={"date"}></input>
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
        <div className="text-4xl font-bold underline"> All students data</div>
        <Table tbodyData={studentData} theadData={FORM_FIELDS} />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
