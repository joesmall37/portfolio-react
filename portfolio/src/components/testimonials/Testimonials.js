import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Columbia Engineering",
            title: "Software Engineering Bootcamp",
            img:
                "data:image/webp;base64,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",
            // icon: "assets/twitter.png",
            desc:
                "Full stack software engineering bootcamp graduate.",
        },
        {
            id: 2,
            name: "University of Pittsburgh",
            title: "Bachelors of Science",
            img:
                "data:image/png;base64,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",
            // icon: "assets/youtube.png",
            desc:
                "Bachelors of Science, Psychology/Philosophy.",
            // featured: true,
        },
        // {
        //     id: 3,
        //     name: "Martin Harold",
        //     title: "CEO of ALBI",
        //     img:
        //         "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        //     icon: "assets/linkedin.png",
        //     desc:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        // },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Education</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
