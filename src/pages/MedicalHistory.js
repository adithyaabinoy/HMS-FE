import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { getReportList } from "../redux/reportReducer";
import "../styles/MedicalHistory.css";

const MedicalHistory = () => {
  const [list, setList] = useState("");
  const [foundUsers, setFoundUsers] = useState(list);
  // the value of the search field
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReportList()).then((data) => setList(data.payload));
  }, [dispatch]);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = list.filter((user) => {
        return user.patientName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(list);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  return (
    <div className="medicalHistoryContainer">
      <Sidebar />
      <div className="innerContainer">
        <div className="search-list">
          <input
            type="text"
            placeholder="search patient Name"
            value={name}
            onChange={filter}
          />
          <SearchIcon />
        </div>
        <div className="table">
         <h1 style={{textAlign: 'center'}}> Medical History</h1>
          <table className="medical-history-table">
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Test Report</th>
            </tr>

            {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.patientId}</td>
                    <td>{data.patientName}</td>
                    <td>{data.age}</td>
                    <td>{data.sex}</td>
                    {data.testReportForm.map((data, index) => {
                      return (
                        <td key={index} className="test-data">
                          <p> {data.testName}</p>
                          <p>{data.standardValue}</p>
                          <p>{data.value}</p>
                          <p>{data.unit}</p>
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <h1>No Data found</h1>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
