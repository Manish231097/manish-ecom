import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function AddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h1 className="text-center mb-4">Addd Users</h1>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errMsg ? <h5 className="text-danger">{errMsg}</h5> : ""}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}
