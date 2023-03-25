import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import './login.css'

const initialUser = { email: "", password: "", username: "" };
const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `https://ecom-backend-xkkl.onrender.com/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        console.log(user);
        if (!!res) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className="registerpage">
        <div className="loginform">
        
          <h2>SIGN UP</h2>

            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
 

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your email"
            />
 

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter password"
            />

          <Button color="primary" onClick={signUp}>
            Sign up
          </Button>
        
        </div>
    </div>
  );
};

export default Registration;
