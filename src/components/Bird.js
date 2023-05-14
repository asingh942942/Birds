import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Bird(props) {
  const [descShift, setDescShift] = useState("shift");
  const [factsShift, setFactsShift] = useState("shift-right");

  const { ref: birdImgRef, inView: birdInView } = useInView();

  function shiftFunc() {
    setDescShift("shift-left");
    setFactsShift("shift");
  }

  function unshiftFunc() {
    setDescShift("shift");
    setFactsShift("shift-right");
  }

  return (
    <>
      <div className="bird-info">
        <div className="bird-type">
          <h2 className="bird-heading">{props.name}</h2>
          <p className={`bird-desc ${descShift}`}>{props.birdDesc}</p>
          <div className={`bird-facts ${factsShift}`}>
            <h3>Appearance</h3>
            <p>{props.appearanceInfo}</p>
            <a href={props.learnLink} target="_blank">
              <button className="learn-more">Learn More</button>
            </a>
          </div>
          <div className="circles">
            <div className="circle" onClick={unshiftFunc}></div>
            <div className="circle" onClick={shiftFunc}></div>
          </div>
        </div>
        <img
          ref={birdImgRef}
          className={`bird-img ${birdInView ? "bird-img-fade-in" : ""} `}
          src={props.birdImg}
          alt={props.birdImgAlt}
        />
      </div>
    </>
  );
}
