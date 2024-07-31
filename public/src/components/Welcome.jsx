import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
        if (user) {
          setUserName(user.username);
        } else {
          console.error("User data not found in local storage");
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };
    fetchUserName();
  }, []);

  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
      
    </Container>
   
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  position: relative; /* Added */
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
