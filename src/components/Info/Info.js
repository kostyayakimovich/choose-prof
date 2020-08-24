import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";


const Info = () => {
  let history = useHistory();
  const onClick = (path) => {
    history.push(`/${path}`);
  };

  return (

    <>
      <section className="info">
        <div className="introdutionBlock">
          <h3 className="introdutionText">
            You can try to work with this program but if you want to keep constant records you should register
             </h3>
        </div>
        <button className="startBtn" onClick={() => onClick("accounting")}>Start</button>
      </section>
    </>

  );
};

export default Info;