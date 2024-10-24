import { MdOutlineKeyboardDoubleArrowLeft ,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from "react";
import "../App.css";

const exercises = [
  {
    name: "Flat Chest Presses",
    imgSrc: "./src/assets/imgs/Flat Chest Presses.gif",
  },
  {
    name: "Incline Chest Presses",
    imgSrc: "./src/assets/imgs/Incline Chest Presses.gif",
  },
  {
    name: "Hammer curls",
    imgSrc: "./src/assets/imgs/Hammer curls.gif",
  },
  {
    name: "Overhead Triceps Extensions",
    imgSrc: "./src/assets/imgs/Overhead Triceps Extensions.gif",
  },
  {
    name: "Shrugs",
    imgSrc: "./src/assets/imgs/Shrugs.gif",
  },
  {
    name: "Lateral Raises",
    imgSrc: "./src/assets/imgs/Lateral Raises.gif",
  },
];

const RenderContentForDay = (selectedDate) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current exercise

  const nextSlide = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDoneClick = () => {
    nextSlide();
  };

  switch (selectedDate) {
    case "Sun":
      return (

          <div className="sliderControls">
            <button className="arrows" onClick={prevSlide} disabled={currentIndex === 0}>
            <MdOutlineKeyboardDoubleArrowLeft />
            </button>

            <div className="exerciseDescription">
          <div className="exerciseName">{exercises[currentIndex].name}</div>
          <img
            className="exerciseVdo"
            src={exercises[currentIndex].imgSrc}
            alt={exercises[currentIndex].name}
          />
          <br />
          <button className="exerciseComplete" onClick={handleDoneClick}>
            Done
          </button> 

          </div>
            <button className="arrows" onClick={nextSlide} disabled={currentIndex === exercises.length - 1}>
            <MdOutlineKeyboardDoubleArrowRight/>
            </button>
        </div>
      );
    case "Mon":
      return <div>Content for Monday</div>;
    case "Tue":
      return <div>Content for Tuesday</div>;
    case "Wed":
      return <div>Content for Wednesday</div>;
    case "Thu":
      return <div>Content for Thursday</div>;
    case "Fri":
      return <div>Content for Friday</div>;
    case "Sat":
      return <div>Content for Saturday</div>;
    default:
      return null;
  }
};

export default RenderContentForDay;
