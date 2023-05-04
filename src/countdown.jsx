import React, { useState, useEffect } from "react";
import "./countdown.css";

export const Countdown = () => {
  // State variables to keep track of days, hours, minutes, and seconds
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // State variable to keep track of the user input date
  const [inputDate, setInputDate] = useState("1 Jan 2023");

  // State variable to keep track of the current date and time
  const [currentDate, setCurrentDate] = useState(inputDate);

  // Effect hook to update the countdown values when currentDate or inputDate changes
  useEffect(() => {
    // Convert inputDate to a Date object
    const changingDate = new Date(inputDate);
    // Get the current date and time
    const currentDate = new Date();
    // Calculate the total number of seconds between inputDate and currentDate
    const totalSeconds = (changingDate - currentDate) / 1000;

    // Update the state variables with the calculated countdown values
    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [currentDate]);

  // Function to format time values with leading zeros if needed
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  // Event handler to update the inputDate state variable when the user types in the input field
  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  // Event handler to update the currentDate state variable when the user clicks the "Countdown" button
  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };

  // Render the countdown timer and input field/button
  return (
    <div className="countdown-container">
      <div className="countdown-values">
        <div className="countdown-value">
          <p className="big-text">{days}</p>
          <span>days</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{hours}</p>
          <span>hours</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{minutes}</p>
          <span>mins</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
      <div className="countdown-input-button">
        <input className="countdown-input" onChange={onChangeHandler} />
        <button className="countdown-button" onClick={onClickHandler}>
          Countdown
        </button>
      </div>
    </div>
  );
};
