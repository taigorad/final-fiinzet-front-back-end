import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [empty, setempty] = useState("");

  const add = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone,
        age: age,
        address: address,
        password: password,
      }),
    };
    const response = await fetch("https://fiinzet.com/add", requestOptions);
    if (response) {
      setempty("sdfgb");
      setaddress("");
      setage("");
      setname("");
      setpassword("");
      setphone("");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Registration From</h1>
        NAME :{" "}
        <input
          type="text"
          placeholder="enter user name here "
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>{" "}
        <br />
        <br />
        PHONE NO :
        <input
          type="number"
          placeholder="enter user phone no  here "
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        ></input>{" "}
        <br />
        <br />
        AGE:{" "}
        <input
          type="number"
          placeholder="enter user age here "
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        ></input>{" "}
        <br />
        <br />
        ADDRESS :{" "}
        <input
          type="text"
          placeholder="enter user address here "
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        ></input>
        <br />
        <br />
        PASSWORD :{" "}
        <input
          type="password"
          placeholder="enter password here  "
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button onClick={add}> submit information</button>
      </div>
    </>
  );
}

export default Form;
