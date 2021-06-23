
import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Workout Tracker",
            desc:
                "Using Mongoose, node.js and express.js this tracks workouts",
            img:
                "https://user-images.githubusercontent.com/63420051/120858092-432cd800-c550-11eb-9e83-eb9f044cdeb4.png",
            link: "https://github.com/joesmall37/Workout-Tracker"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Team Profile generator",
            desc:
                "This app uses Javascript unit testing and OOP to generate a team",
            img:
                "https://user-images.githubusercontent.com/63420051/114327597-b34a4f00-9b07-11eb-837e-83bbfa6f1fc4.png",
            link: "https://github.com/joesmall37/Workout-Tracker"
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Bartcoin",
            desc:
                "This app uses mysql, express, node.js and vanilla js to create a bartering system. App use authetication.",
            img:
                "https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            link: "https://github.com/joesmall37/smarter-to-barter"
        },
        {
            id: "4",
            icon: "./assets/writing.png",
            title: "Amazon Clone",
            desc:
                "Full stack amazon clone/e-commerce app.",
            img:
                "https://user-images.githubusercontent.com/63420051/122328575-eb9e4d00-cefd-11eb-9d5c-f4f1564e5cbf.jpeg",
            link: "https://github.com/joesmall37/e-commerce"
        },
        {
            id: "5",
            icon: "./assets/writing.png",
            title: "Spotify Clone",
            desc:
                "Full stack spotify clone. firebase authentication",
            img:
                'https://user-images.githubusercontent.com/63420051/122328724-20aa9f80-cefe-11eb-87a2-371917ef9e65.jpeg',
            link: "https://github.com/joesmall37/music-app"
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <a href={d.link}>Link to project</a>

                                    {/* <span>Projects</span> */}
                                </div>
                            </div>
                            <div className="right">
                                {/* <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                /> */}
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}
