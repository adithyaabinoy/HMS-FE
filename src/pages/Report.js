import React from "react";
import "../styles/Report.css";

const Report = () => {
  return (
    <div className="reportContainer">
      <h2>LABORATORY REPORT</h2>
      <div className="patientInfo">
        <p>
          <label>Name : </label>
          <input type="text" />
        </p>
        <p>
          <label>Age : </label>
          <input type="number" />
        </p>
        <p>
          <label>Gender : </label>
          <input type="text" />
        </p>
        <p>
          <label>Date: </label>
          <input type="number" />
        </p>
        <p>
          <label>Patient ID: </label>
          <input type="number" />
        </p>
      </div>
      <div className="reportContainer-test">
        <h3>COMPLETE BLOOD COUNT</h3>
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
              <td>Blood</td>
              <td>22.5gms</td>
              <td>23gms</td>
            </tr>
            <tr>
              <td>Urine</td>
              <td>22.5gms</td>
              <td>23gms</td>
            </tr>
            <td>Hemoglobin</td>
            <td>12</td>
            <td>12</td>
          </tbody>
        </table>
      </div>
      <button className="btn">Save and Print Report</button>
    </div>
  );
};

export default Report;
