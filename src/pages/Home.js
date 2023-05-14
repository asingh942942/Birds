import birdsBackgroundImg from "../imgs/birdsBackgroundImg.png";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: circleRef, inView: circleInView } = useInView();

  return (
    <>
      <div
        ref={circleRef}
        className={` circle-underlay-1 ${circleInView ? "circle-enter" : ""}`}
      ></div>
      <div
        className={`circle-underlay-2 ${circleInView ? "circle-enter" : ""}`}
      ></div>
      <img
        className={` homepage-background-img ${
          circleInView ? "main-img-enter" : ""
        }`}
        src={birdsBackgroundImg}
        alt="Flying birds"
      />
      <div className="heading-container">
        <h1 className="main-heading">
          Let's talk about the <span>World</span> of Birds!
        </h1>
        <p>
          There are over 10,000 species of birds around the world, and many of
          them capture nature's most intense hues, dances, and songs. This
          website showcases 4 alluring bird species that might not have ever
          known before.
        </p>
      </div>
    </>
  );
}
