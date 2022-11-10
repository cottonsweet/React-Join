import "./App.css";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("");

  const currentTimer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const days = date.getDate();
    setTime(`${year}.${month}.${days}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <div className="wrap">
      <div className="main">
        <p className="time">{time}</p>
        <h3 className="title">안녕하세요 원하는 기능을 확인 후 아래버튼을 눌러주세요</h3>
        <div className="loginbox">
          <button className="login" onClick={() => console.log("1")}>
            로그인
          </button>
          <button className="join" onClick={() => console.log("2")}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
