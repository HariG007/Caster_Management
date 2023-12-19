// Admin.js

import React from 'react';
import '../Table/Table.css'; // Import the CSS file for styling

const Admin = () => {
  const sampleData = [
    {
      serialNo: 1,
      mountPoint: 'BaseStation1',
      lat: 40.7128,
      long: -74.0060,
      status: 'Active',
    },
    {
      serialNo: 2,
      mountPoint: 'BaseStation2',
      lat: 34.0522,
      long: -118.2437,
      status: 'Inactive',
    },
    // Add more sample data as needed
  ];

  const handleCreate = (serialNo) => {
    // Implement your logic for creating a base station
    console.log(`Creating base station with Serial No: ${serialNo}`);
  };

  const handleTerminate = (serialNo) => {
    // Implement your logic for terminating a base station
    console.log(`Terminating base station with Serial No: ${serialNo}`);
  };

  const tableHeader = [...Object.keys(sampleData[0]), 'Actions']; // Add 'Actions' to the header

  return (
    <>
    <div >
    <center>
      <div>
        <table className="table mb-0" style={{border:'2px solid lightgray',borderRadius:'20px',paddingLeft:'50px',paddingRight:'20px',boxShadow: 'rgba(149,157,165,0.2) 0px 8px 24px' }} >
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index} className="border-gray-200" style={{padding: '15px', borderBottom: '1px solid #ddd',minWidth:'90%' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((data) => (
              <tr key={data.serialNo}>
                {tableHeader.map((header, index) => (
                  <td key={index} style={{ padding: '15px', borderBottom: '1px solid #ddd', width: 'auto' }}>
                    {header === 'lat' || header === 'long' ? data[header].toFixed(4) : data[header]}
                  </td>
                ))}
                <td style={{
                  borderBottom: '1px solid #ddd',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'space-around',
                  width: '20%',
                }}>
                  <button className="create-button" onClick={() => handleCreate(data.serialNo)}>Create</button>
                  <button className="terminate-button" onClick={() => handleTerminate(data.serialNo)}>Terminate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </center>
      </div>
    </>
  );
};

export default Admin;
