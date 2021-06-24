
import "./intro.scss";
// import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, {
    //         showCursor: true,
    //         backDelay: 1500,
    //         backSpeed: 60,
    //         strings: ["Developer", "Designer", "Content Creator"],
    //     });
    // }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">

                    <h1>
                            Joe Small - Software Engineer
                    </h1>

                    {/* <ol>
                        <li> Experience building full stack applications using the Mern and Django Stacks. </li>
                        <li>Experience designing relational databases (Mysql) and no-relationa databades (MongoDB)</li>
                        <li> Experience building applications using Sequelize ORM and Mongoose ODM.</li>
                        <li> Enjoy solving complex algorithms and problems in multiple programming languages </li>
                        <li> Enjoy solving data science problems</li>
                    </ol> */}
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}
