 import React from 'react';
 import Sidebar from "../components/Sidebar";
 import "../styles/UserAppointment.css";

 
 function UserAppointment() {
   return (
     <div className='user_appointments'>
        <Sidebar />
        <div className='appointments_container'>
            <h1>Appointments</h1>
            <table>
                <tr>
                    <th>Name of Doctor</th>
                    <th>Time</th>
                    <th>Date</th>
                </tr>
                <tbody>
                    <tr>
                        <td>hello</td>
                    </tr>
                </tbody>
            </table>
        </div>
       
     </div>
   )
 }
 
 export default UserAppointment
 