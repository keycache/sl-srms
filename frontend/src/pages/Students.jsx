import React, { useEffect, useState } from "react";
import { post, get } from "../helper/api";
import Table from "../components/sidebar/Table";
import { Toaster } from "react-hot-toast";
import { notify } from "../helper/notification";

const API_URL = import.meta.env.VITE_API_URL;

const FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  DOB = "dateOfBirth";

const FORM_FIELDS = [FIRST_NAME, LAST_NAME, DOB];

export default function Students() {
  const [errorMessage, setErrorMessage] = useState("");
  const [studentData, setStudentData] = useState([]);

  // {firstName: 'Jon', lastName:'Doe', dateOfBirth: '2022-12-01'}
  useEffect(() => {
    // TODO handle the errors gracefully
    get(`${API_URL}/student/`)
      .then((res) => res.json())
      .then((out) => {
        setStudentData(out.data);
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
      post(`${API_URL}/student/`, data)
        .then((res) => res.json())
        .then((out) => {
          notify("Successfully added student record", "success");
          console.log(studentData);
          console.log(out.data);
          setStudentData([...structuredClone(studentData), out.data]);
          clearForm(e.target);
        });
    } else {
      setErrorMessage(
        "First and Last Name cannot be empty.\nStudent's DOB can not be less than 10 years"
      );
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
