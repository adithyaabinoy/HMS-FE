import React from 'react'
import { styled } from "styled-components";

function Report() {
  return (
    <ReportContainer>
      <h2><mark>LABORATORY REPORT</mark></h2>
        <PatientInfo>
          <label>Name : </label><input type="text"/>
          <label>Age : </label><input type="number"/>
          <label>Gender : </label><input type="text"/>
          <label>Doctor :</label><input type="text"/>
        </PatientInfo>
        <TestContainer>
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
        </TestContainer>
    </ReportContainer>
  )
}

export default Report

const ReportContainer = styled.div`
> h2 {
  margin-bottom: 10px;
  font-size: 1.2em;
  text-align: center;
  height: 100%;
}

> h2 mark {
  color: black;
}
`

const PatientInfo = styled.div `
height: 80px;
> label {
  font-size: 0.9em;
  margin-bottom: 5px;
  padding: 5px;
`
 
const TestContainer = styled.div `
> table {
  width: 100%;
  border: 2px solid #000;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 0.9em;
},

> table thead {
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid black;
},

table tbody tr {
  height: 1.9em;

}

> h3 {
  text-align: center;
  font-size: 0.9em;
  
}


`