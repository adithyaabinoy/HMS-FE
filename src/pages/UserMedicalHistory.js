import React, { useEffect, useState } from "react";
import "../styles/userMedicalHistory.css";
import { useDispatch } from "react-redux";
import { getPatientMedicalHistory } from "../redux/reportReducer";
import Sidebar from "../components/Sidebar";

const UserMedicalHistory = () => {
  const [list, setList] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatientMedicalHistory()).then((response) =>
      setList(response.payload)
    );
  }, [dispatch]);

  console.log(list);
  return (
    <div className="user_container">
    <Sidebar />
      <div className="table">
        <h1>Medical History</h1>
        <table className="test-report-table">
          <tr>
            <th>Test Name</th>
            <th>Test Value</th>
            <th>Unit</th>
            <th>Test Reference Value</th>
          </tr>

          {list && list.length > 0 ? (
            list.map((data, i) => {
              return (
                <tr key={i}>
                  {data.testReportForm.map((data, i) => {
                    console.log(data);
                    return (
                      <>
                        <td>{data.testName}</td>
                        <td>{data.value}</td>
                        <td>{data.unit}</td>
                        <td>{data.standardValue}</td>
                      </>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <p>No data</p>
          )}
        </table>
      </div>
    </div>
  );
};

export default UserMedicalHistory;
