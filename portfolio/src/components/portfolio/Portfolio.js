import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    MernPortfolio,
    JavascriptPortfolio,
    PythonPortfolio,
    Dsaportfolio,
    // contentPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "Mern",
            title: "MERN",
        },
        {
            id: "javascript",
            title: "Javascript",
        },
        {
            id: "mobile",
            title: "Python",
        },
        {
            id: "dsa",
            title: "Data Structures/Algorithms",
        },

    ];

    useEffect(() => {
        switch (selected) {
            case "Mern":
                setData(MernPortfolio);
                break;
            case "javascript":
                setData(JavascriptPortfolio);
                break;
            case "mobile":
                setData(PythonPortfolio);
                break;
            case "dsa":
                setData(Dsaportfolio);
                break;
            // case "content":
            //     setData(contentPortfolio);
            //     break;
            default:
                setData(MernPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        link = {item.link}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>
                            <a href={d.link}>{d.title}</a>
                        </h3>

                    </div>
                ))}
            </div>
        </div>
    );
}
