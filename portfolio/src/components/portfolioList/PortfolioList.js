import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected, link }) {
    return (
        <li
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}
            {link}
        </li>
    );
}
