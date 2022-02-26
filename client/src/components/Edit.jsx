import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Edit.css";

const Edit = () => {
  const [user, setUser] = useState([]);
  let { id } = useParams();

  const userCall = async () => {
    const { data } = await axios.get(`/api/${id}`);
    setUser(data);
  };

  useEffect(() => {
    userCall();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const updateUser = async (x) => {
    x.preventDefault();

    let item = { name, email, gender, status };

    await axios.put(`/api/${id}`, item);
  };

  return (
    <div className="formControl">
      <Link to={"/"}>
        <h1>GO BACK</h1>
      </Link>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          className="forminput"
          type="text"
          name="name"
          placeholder={user.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          className="forminput"
          type="email"
          name="email"
          placeholder={user.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="gender">Gender: </label>
        <input
          className="forminput"
          type="text"
          name="gender"
          placeholder={user.gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="status">Status: </label>
        <input
          className="forminput"
          type="text"
          name="status"
          placeholder={user.status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        ></input>
      </div>
      <Button onClick={updateUser}>Update</Button>
    </div>
  );
};

export default Edit;
