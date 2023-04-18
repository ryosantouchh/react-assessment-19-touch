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
    <div className="admin-container">
      <h2>Create User Here</h2>
      <div className="input-container">
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

      <div className="table-container">
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
                  <button
                    onClick={() => handleClickDelete(idx)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {employees.length !== 0 ? (
        <button
          onClick={() => handleClickDeleteAll()}
          className="delete-all-btn"
        >
          Delete All Data
        </button>
      ) : null}
    </div>
  );
};

export default HomeAdmin;
