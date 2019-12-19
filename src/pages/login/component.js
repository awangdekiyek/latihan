import React from "react";
// import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const HandleLogin = function(event) {
    alert("sukses");
    let txtUsername = document.getElementById("username").value;
    let txtPassword = document.getElementById("password").value;
    // alert(txtUsername);
    let data = {
      email: txtUsername,
      password: txtPassword
    };
    console.log(data);
    // Axios.get("http://api-arus.herokuapp.com/api/login")
    Axios.post("http://api-arus.herokuapp.com/api/login", {
      email: txtUsername,
      password: txtPassword
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <div>
      <form action="">
        <h1>Halaman Login</h1>
        <label>Email</label>
        <input id="username" type="Text" placeholder="username" />
        <label>Password</label>
        <input id="password" type="Password" placeholder="password" />
        <button type="submit" onClick={HandleLogin}>
          submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
