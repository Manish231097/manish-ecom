import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { apiBaseUrl } from "../Config";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await axios.get(`${apiBaseUrl}user`);
        if (res.data.status === 200) {
          setUsers(res.data.msg);
          setErrMsg("");
        } else {
          setErrMsg(res.data.msg);
        }
      } catch (err) {
        setErrMsg("somthing wrong!");
      }
    }
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">users</h1>
        <Link to="/add-user" className="btn btn-info my-4">Add User</Link>
        {errMsg ? (
          <h2 className="text-center"></h2>
        ) : (
          <table className="table" id="dt">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Email</th>
                <th>Status</th>
                <th>Id</th>
                <th>Added on</th>
              </tr>
            </thead>
            <tbody>
              {users.map((v, i) => {
                return (
                  <tr key={i}>
                    <th>{i+1}</th>
                    <td>{v.email}</td>
                    <td>{v.status}</td>
                    <td>{v._id}</td>
                    <td>{v.added_on}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
