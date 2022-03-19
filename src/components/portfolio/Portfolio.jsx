import React from "react";
import "./portfolio.css";
import imgPlaceHolder from "../../assets/placeholder-img.png";

const data = [
  {
    id: 1,
    image: imgPlaceHolder,
    title: "Portfolio Item",
    repo: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: imgPlaceHolder,
    title: "Portfolio Item",
    repo: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: imgPlaceHolder,
    title: "Portfolio Item",
    repo: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: imgPlaceHolder,
    title: "Portfolio Item",
    repo: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: imgPlaceHolder,
    title: "Portfolio Item",
    repo: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: imgPlaceHolder,
    title: "Portfolio Item",
    repo: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, repo, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={imgPlaceHolder} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={repo} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
