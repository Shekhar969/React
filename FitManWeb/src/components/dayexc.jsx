import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from "react";
import "../App.css";

const sundayExercises = [
  {
    name: "1. Flat Chest Presses",
    imgSrc: "./src/assets/imgs/Flat Chest Presses.gif",
  },
  {
    name: "2. Incline Chest Presses",
    imgSrc: "./src/assets/imgs/Incline Chest Presses.gif",
  },
  {
    name: "3. Hammer curls",
    imgSrc: "./src/assets/imgs/Hammer curls.gif",
  },
  {
    name: "4. Overhead Triceps Extensions",
    imgSrc: "./src/assets/imgs/Overhead Triceps Extensions.gif",
  },
  {
    name: "5. Shrugs",
    imgSrc: "./src/assets/imgs/Shrugs.gif",
  },
  {
    name: "6. Lateral Raises",
    imgSrc: "./src/assets/imgs/Lateral Raises.gif",
  },
];

const mondayExercises = [
  {
    name: "1. Lat Pull Down",
    imgSrc: "./src/assets/imgs/Lat Pull Down .gif",
  },
  {
    name: "2. Squats",
    imgSrc: "./src/assets/imgs/Squats.gif",
  },
  {
    name: "3. Plank",
    imgSrc: "./src/assets/imgs/Plank.gif",
  },
  {
    name: "4. Lunges",
    imgSrc: "./src/assets/imgs/Lunges.gif",
  },
  {
    name: "5. Burpees",
    imgSrc: "./src/assets/imgs/Burpees.gif",
  },
  {
    name: "6. Mountain Climbers",
    imgSrc: "./src/assets/imgs/Mountain Climbers.gif",
  },
];

const tuesdayExercises = [
  {
    name: "1. Push-Ups",
    imgSrc: "./src/assets/imgs/Push-Ups.gif",
  },
  {
    name: "2. Squats",
    imgSrc: "./src/assets/imgs/Squats.gif",
  },
  {
    name: "3. Plank",
    imgSrc: "./src/assets/imgs/Plank.gif",
  },
  {
    name: "4. Lunges",
    imgSrc: "./src/assets/imgs/Lunges.gif",
  },
  {
    name: "5. Burpees",
    imgSrc: "./src/assets/imgs/Burpees.gif",
  },
  {
    name: "6. Mountain Climbers",
    imgSrc: "./src/assets/imgs/Mountain Climbers.gif",
  },
];

const RenderContentForDay = (selectedDate) => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  const getExercises = () => {
    switch (selectedDate) {
      case "Sun":
        return sundayExercises;
      case "Mon":
        return mondayExercises;
        return sundayExercises;
      case "Tue":
        return tuesdayExercises;
      default:
        return [];
    }
  };

  const exercises = getExercises(); 

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

  return (
    <div className="sliderControls">
      <button className="arrows" onClick={prevSlide} disabled={currentIndex === 0}>
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>

      <div className="exerciseDescription">
        {exercises.length > 0 && (
          <>
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
          </>
        )}
      </div>
      <button className="arrows" onClick={nextSlide} disabled={currentIndex === exercises.length - 1}>
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
    
  );
};

export default RenderContentForDay;
