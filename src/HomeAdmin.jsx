import React from "react";

const HomeAdmin = (props) => {
  const {
    employees,
    nameInput,
    lastnameInput,
    positionInput,
    setNameInput,
    setLastnameInput,
    setPositionInput,
    handleClickAdd,
    handleClickDelete,
    handleClickDeleteAll,
  } = props;

  return (
    <div>
      <div>
        <h2>Create User Here</h2>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastnameInput}
          onChange={(e) => setLastnameInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={positionInput}
          onChange={(e) => setPositionInput(e.target.value)}
        />
        <button onClick={() => handleClickAdd()}>Add</button>
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
        {employees.map((item, idx) => {
          return (
            <tr key={idx + 1}>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.position}</td>
              <td>
                <button onClick={() => handleClickDelete(idx)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>

      {employees.length !== 0 ? (
        <button onClick={() => handleClickDeleteAll()}>Delete All Data</button>
      ) : null}
    </div>
  );
};

export default HomeAdmin;
