import React from "react";

const HomeUser = ({ employees }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
        </tr>
        {employees.map((item, idx) => {
          return (
            <tr key={idx + 1}>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default HomeUser;
