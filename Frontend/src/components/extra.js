import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import Contact from "./images/details.jpg";
import "../components/css/login.css";
import "../components/css/contact.css";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [error, setError] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [pincode, setpincode] = useState("");
  const [status, setstatus] = useState("");
  const [city, setcity] = useState("");
  const [flage, setflage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // await logIn(email, password);

      navigate("/homebackend");
    } catch (err) {
      setError(err.message);
    }
  };
  const add = async () => {
    //console.log(name,email,phone,pincode,status)
    if (name && email && phone && pincode && status && city) {
      await sessionStorage.setItem("name", name);
      await sessionStorage.setItem("email", email);
      await sessionStorage.setItem("phone", phone);
      await sessionStorage.setItem("pincode", pincode);
      await sessionStorage.setItem("status", status);
      await sessionStorage.setItem("city", city);
      navigate("/phonesignup");
      setflage(false);
    } else {
      setflage(true);
    }
  };

  return (
    <section className="section mt-5 pt-4 pb-5 contact-div">
      <div className="container">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6  contactCSS">
              <div className=" img-fluid">
                <img
                  src={Contact}
                  className="bd-placeholder-img card-img-top img-fluid"
                  width="200"
                  height="200"
                  alt="Balance Transfer"
                />
              </div>
            </div>

            <div className="col-md-6  contactCSS">
              {flage ? (
                <h2 className="mt-4">Fill All Details</h2>
              ) : (
                <h2 className="mt-4">Enter Your Details</h2>
              )}
              {/* <h2 className="mb-3">Enter Your Details</h2> */}
              <hr className="hrCSS" />
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 ">Full Name</label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Full Name"
                  ></input>
                </div>
                <div>
                  {" "}
                  <label className="mb-1 ">Phone Number</label>
                  <input
                    type="Number"
                    value={phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Phone Number"
                  ></input>
                </div>
                <div>
                  {" "}
                  <label className="mb-1 ">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Email Address"
                  ></input>{" "}
                </div>

                <div>
                  {" "}
                  <label className="mb-1 ">City</label>{" "}
                  <select
                    value={city}
                    onChange={(e) => {
                      setcity(e.target.value);
                    }}
                    className="form-control"
                  >
                    <option></option>
                    <option>Pune</option>
                  </select>{" "}
                </div>

                <div>
                  <label className="mb-1 ">Pincode</label>
                  <input
                    type="number"
                    value={pincode}
                    onChange={(e) => {
                      setpincode(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Pincode"
                  ></input>
                  <br />
                </div>

                <div>
                  {" "}
                  <label className="mb-1 ">Employee Status</label>{" "}
                  <select
                    value={status}
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                    className="form-control"
                  >
                    <option></option>
                    <option>Self-Employed</option>
                    <option>Salaried</option>
                  </select>{" "}
                </div>
              </Form>
              <div class="button-container">
                <div className="from-group py-3 hlB">
                  <button
                    onClick={add}
                    className="btn btn-primary shadow w-100"
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
