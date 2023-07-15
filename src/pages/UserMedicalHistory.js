import React, { useEffect, useState } from "react";
import "../styles/userMedicalHistory.css";
import { useDispatch } from "react-redux";
import { getPatientMedicalHistory } from "../redux/reportReducer";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const UserMedicalHistory = () => {
  const [list, setList] = useState("");
  const dispatch = useDispatch();
  let { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    dispatch(getPatientMedicalHistory()).then((response) =>
      setList(response.payload)
    );
  }, [dispatch]);

  console.log(list);
  return (
    <>
      <Sidebar />
      <div className="table">
        <h1>Medical History</h1>
        <table className="test-report-table">
          <tr>
            <th>Test Name</th>
            <th>Test Value</th>
            <th>Test Reference Value</th>
          </tr>

          {list && list.length > 0 ? (
            list.map((data, i) => {
              return (
                <tr key={i}>
                  {data.testReportForm.map((data, i) => {
                    console.log(data);
                    return (
                      <tr key={i}>
                        <td>{data.testName}</td>
                        <td>{data.value}</td>
                        <td>{data.standardValue}</td>
                      </tr>
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
    </>
  );
};

export default UserMedicalHistory;
