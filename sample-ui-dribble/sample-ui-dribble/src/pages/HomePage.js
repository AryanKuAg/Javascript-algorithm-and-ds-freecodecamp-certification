import React from "react";
import BeautyButton from "../components/BeautyButton";
import "./HomePage.css";
import mainImage from "../assets/main_screen_picture.png";
import BeautyCard from "../components/BeautyCard";
import beautyCardList from "../assets/beautyCardList";
import "../components/BeautyButton.css";

function HomePage() {
  return (
    <div>
      <header>
        <nav className="homePage__header__nav">
          <h1>E-Online</h1>
          <div>
            <ul className="homePage__header__nav__ul">
              <li>
                <strong>Home</strong>
              </li>
              <li>Category</li>
              <li>Courses</li>
              <li>Blog</li>
              {/* <button className="">Sign Up</button> */}
              <li>
                <BeautyButton title="Sign Up" bgColor={"#A390FD"} />
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="homePage__main">
        <div className="homePage__main__box">
          <h1>
            Investing in Knowledge and{" "}
            <span id="your__future">Your Future</span>{" "}
          </h1>
          <p id="homePage__para__desc">
            Our e-learning programs has been developed to be a vechicle of
            delivering multimedia learning solutions for your business.
          </p>
          <div className="homePage__main__box__items">
            <BeautyButton title="Contact" bgColor={"#A390FD"} />{" "}
            <div className="homePage__data__item__div">
              <h1>50+</h1>
              <p>Career Courses</p>
            </div>{" "}
            <div className="homePage__data__item__div">
              <h1>1M+</h1>
              <p>Our Students</p>
            </div>
          </div>
        </div>
        <div>
          <img
            id="homePage__main__image"
            src={mainImage}
            alt="Our Main Image"
          />
        </div>
      </main>
      <section>
        <h2>Browse Top Essential Career Courses</h2>
        <div className="homePage__section__div">
          {beautyCardList.map((e) => {
            return <BeautyCard key={e.text} icon={e.icon} text={e.text} />;
          })}
          <div className="roundButton__div">
            <button className="beautyButton roundButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="roundButton__arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p>Browse All</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
