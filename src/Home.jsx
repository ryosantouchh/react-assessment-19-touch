import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";
import { useAsyncError } from "react-router-dom";

const mockEmployees = [
  {
    id: 0,
    name: "Odell",
    lastname: "Beckham Jr.",
    position: "Frontend Developer",
  },
  {
    id: 1,
    name: "Aaron",
    lastname: "Donald",
    position: "Backend Developer",
  },
  {
    id: 2,
    name: "Jalen",
    lastname: "Ramsey",
    position: "UX/UI Designer",
  },
  {
    id: 3,
    name: "Tom",
    lastname: "Brady",
    position: "Scrum Master",
  },
];

const Home = () => {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([...mockEmployees]);
  const [ID, setID] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [positionInput, setPositionInput] = useState("");

  const handleSector = (value) => {
    setSector(value);
  };

  const handleClickAdd = () => {
    if (nameInput !== "" || lastnameInput !== "" || positionInput !== "") {
      let newInput = {
        id: ID,
        name: nameInput,
        lastname: lastnameInput,
        position: positionInput,
      };
      let cloneEmployees = [...employees, newInput];
      setEmployees([...cloneEmployees]);

      setNameInput("");
      setLastnameInput("");
      setPositionInput("");

      setID((prev) => (prev += 1));
    }
  };

  const handleClickDelete = (idx) => {
    let cloneEmployees = [...employees];
    cloneEmployees.splice(idx, 1);
    setEmployees([...cloneEmployees]);
  };

  const handleClickDeleteAll = () => {
    let confirmDelete = confirm("Delete All Data");
    if (confirmDelete) {
      setEmployees([]);
      setID(0);
    }
  };

  useEffect(() => {
    let cloneEmployees = [...employees];
    setEmployees([...cloneEmployees]);

    let length = employees.length;
    setID(length);
  }, []);

  return (
    <Layout>
      <div className="home-container">
        <div>
          <h1>
            {sector === "user"
              ? "Generation Thailand - User Sector"
              : sector === "admin"
              ? "Generation Thailand - Admin Sector"
              : "Generation Thailand - React Assessment"}
          </h1>
        </div>
        <div className="home-btn-container">
          <button onClick={() => handleSector("user")} className="sector-btn">
            User Home Sector
          </button>
          <button onClick={() => handleSector("admin")} className="sector-btn">
            Admin Home Sector
          </button>
        </div>

        {sector === "user" ? (
          <HomeUser employees={employees} />
        ) : sector === "admin" ? (
          <HomeAdmin
            employees={employees}
            nameInput={nameInput}
            lastnameInput={lastnameInput}
            positionInput={positionInput}
            setNameInput={setNameInput}
            setLastnameInput={setLastnameInput}
            setPositionInput={setPositionInput}
            handleClickAdd={handleClickAdd}
            handleClickDelete={handleClickDelete}
            handleClickDeleteAll={handleClickDeleteAll}
          />
        ) : null}
      </div>
    </Layout>
  );
};

export default Home;
