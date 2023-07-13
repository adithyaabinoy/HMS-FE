import React, { useState } from "react";
import "../styles/Report.css";
import { useDispatch } from "react-redux";
import { postReport } from "../redux/reportReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Report = () => {
  // patient Info
  const [patientName, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setGender] = useState("");
  const [patientId, setId] = useState("");
  const [registerdOn, setDate] = useState("");

  // test values

  const [value, setTestValue] = useState("");
  const [standardValue, setStandardValue] = useState("");
  const [unit, setUnit] = useState("");
  const [testName, setTestName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form data
  let formData = [
    {
      testName,
      value,
      unit,
      standardValue,
    },
  ];
  // payload data for post request
  let data = {
    patientName,
    sex,
    age,
    patientId,
    testReportForm: formData,
  };

  const saveReport = () => {
    dispatch(postReport(data)).then((response) => {
      if (response.payload) {
        setName("");
        setAge("");
        setGender("");
        setId("");
        setTestValue("");
        setStandardValue("");
        setUnit("");
        setTestName("");
        // after test navigate to homepage
        navigate("/");
        toast.success("Successfully created Test Report");
      }
    });
  };
  return (
    <div className="reportContainer">
      <h2>LABORATORY REPORT</h2>

      <div className="patientInfo">
        <p>
          <label>Name : </label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Age : </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        <p>
          <label>Gender : </label>
          <input
            type="text"
            value={sex}
            onChange={(e) => setGender(e.target.value)}
          />
        </p>
        <p>
          <label>Date: </label>
          <input
            type="number"
            value={registerdOn}
            onChange={(e) => setDate(e.target.value)}
          />
        </p>
        <p>
          <label>Patient ID: </label>
          <input
            type="text"
            value={patientId}
            onChange={(e) => setId(e.target.value)}
          />
        </p>
      </div>
      <div className="reportContainer-test">
        <table>
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Value</th>
              <th>Reference Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Test Name"
                  className="data-input"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                />
              </td>
              <td>
                <div className="test-values">
                  <input
                    placeholder="Test Value"
                    className="data-input"
                    value={value}
                    onChange={(e) => setTestValue(e.target.value)}
                  />
                  <input
                    type="text"
                    value={unit}
                    className="data-input"
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="unit"
                  />
                </div>
              </td>
              <td>
                <div className="test-values">
                  <input
                    placeholder="Standard value"
                    className="data-input"
                    value={standardValue}
                    onChange={(e) => setStandardValue(e.target.value)}
                  />
                  <input
                    type="text"
                    value={unit}
                    className="data-input"
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="unit"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn" onClick={saveReport}>
        Save and Print Report
      </button>
    </div>
  );
};

export default Report;
