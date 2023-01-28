import React, { useEffect, useState } from "react";
import { post, get } from "../helper/api";
import Table from "../components/sidebar/Table";
import { Toaster } from "react-hot-toast";
import { notify } from "../helper/notification";

const API_URL = import.meta.env.VITE_API_URL;
const API_COURSE = "course";
const NAME = "name";
const FORM_FIELDS = [NAME];

export default function Courses() {
  const [errorMessage, setErrorMessage] = useState("");
  const [courseData, setCourseData] = useState([]);

  // {firstName: 'Jon', lastName:'Doe', dateOfBirth: '2022-12-01'}
  useEffect(() => {
    // TODO handle the errors gracefully
    get(`${API_URL}/${API_COURSE}/`)
      .then((res) => res.json())
      .then((out) => {
        setCourseData(out.data);
      });
  }, []);

  const validate = (data) => {
    return Boolean(data?.name);
  };

  const clearForm = (form) => {
    FORM_FIELDS.forEach((item) => (form[item].value = null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const fd = new FormData(e.target) does not work. need to investigate
    const data = {
      [NAME]: e.target[NAME].value,
    };

    if (validate(data)) {
      setErrorMessage("");
      post(`${API_URL}/${API_COURSE}/`, data)
        .then((res) => res.json())
        .then((out) => {
          notify("Successfully added course record", "success");
          setCourseData([...structuredClone(courseData), out.data]);
          clearForm(e.target);
        });
    } else {
      setErrorMessage("Course name cannot be empty.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen space-y-10 w-4/5">
      <div className="bold font-extrabold">Add Course</div>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-y-2 align-middle">
          <div className="flex-col space-x-3">
            <label htmlFor="name">Course Name</label>
            <input className="border-2" name="name" type={"text"}></input>
          </div>
          <input
            className="border-2 bg-blue-600 text-white px-3 py-1 rounded-lg"
            type="submit"
          />
          <div className="bold text-red-500 whitespace-pre h-5">
            {errorMessage}
          </div>
        </div>
      </form>
      <div>
        <div className="text-4xl font-bold underline"> All courses data</div>
        <Table tbodyData={courseData} theadData={FORM_FIELDS} />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
