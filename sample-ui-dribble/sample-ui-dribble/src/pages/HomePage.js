import React from "react";
import BeautyButton from "../components/BeautyButton";
import "./HomePage.css"
import mainImage from '../assets/main_screen_picture.png'
import BeautyCard from "../components/BeautyCard";
import beautyCardList from "../assets/beautyCardList";

function HomePage() {
  return (
    <div>
        
      <header>
        <nav className="homePage__header__nav">
            <h1>E-Online</h1>
            <div>
                <ul className="homePage__header__nav__ul">
                    <li>Home</li>
                    <li>Category</li>
                    <li>Courses</li>
                    <li>Blog</li>
                    {/* <button className="">Sign Up</button> */}
                    <li><BeautyButton title='Sign Up' bgColor={'#A390FD'}/></li>
                </ul>
            </div>
        </nav>
      </header>
      <main className="homePage__main">
        <div className="homePage__main__box">
            <h1>Investing in Knowledge and <span id='your__future'>Your Future</span> </h1>
            <p id='homePage__para__desc'>Our e-learning programs has been developed to be a vechicle of delivering multimedia learning solutions for your business.</p>
            <div className="homePage__main__box__items"><BeautyButton title='Sign Up' bgColor={'#A390FD'}/> <p>sd</p> <p>sfds</p></div>
        </div>
        <div>
            <img id='homePage__main__image' src={mainImage} alt="Our Main Image" />
        </div>

      </main>
      <section>
        <h2>Browse Top Essential Career Courses</h2>
        <div className="homePage__section__div">
        {beautyCardList.map(e => {
          return <BeautyCard key={e.text} icon={e.icon} text={e.text}/>
        })}
        <div>
        <BeautyButton title='Sign Up' bgColor={'#A390FD'}/>

        </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
