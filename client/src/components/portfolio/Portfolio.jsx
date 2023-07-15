// import React from "react";
// import "./portfolio.css";
// import IMG1 from "../../assets/portfolio1.jpg"
// import IMG2 from "../../assets/portfolio2.jpg"
// import IMG3 from "../../assets/portfolio3.jpg"
// import IMG4 from "../../assets/portfolio4.jpg"
// import IMG5 from "../../assets/portfolio5.png"
// import IMG6 from "../../assets/portfolio6.jpg"



// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'EasyJOBS',
//     github: 'https://github.com'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'EasyJOBS',
//     github: 'https://github.com'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'EasyJOBS',
//     github: 'https://github.com'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'EasyJOBS',
//     github: 'https://github.com'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'EasyJOBS',
//     github: 'https://github.com'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'EasyJOBS',
//     github: 'https://github.com'
//   },
// ]


// const Portfolio = () => {
//   return <section id="portfolio">
//     <h5>My Recent Work</h5>
//     <h2>Portfolio</h2>

//     <div className="container portfolio__container">
//       <article className="portfolio__item">
//         <div className="portfolio__item-image">
//           <img src={IMG1} alt="" />
//         </div>
//         <h3>This is a portfolio item title</h3>
//         <div className="portfolio__item-cta">
//         <a href="https://github.com" className="btn" target="_blank">Github</a>
//         </div>
//       </article>

//       <article className="portfolio__item">
//         <div className="portfolio__item-image">
//           <img src={IMG1} alt="" />
//         </div>
//         <h3>This is a portfolio item title</h3>
//         <div className="portfolio__item-cta">
//         <a href="https://github.com" className="btn" target="_blank">Github</a>
//         </div>
//       </article>

//       <article className="portfolio__item">
//         <div className="portfolio__item-image">
//           <img src={IMG1} alt="" />
//         </div>
//         <h3>This is a portfolio item title</h3>
//         <div className="portfolio__item-cta">
//         <a href="https://github.com" className="btn" target="_blank">Github</a>
//         </div>
//       </article>

//       <article className="portfolio__item">
//         <div className="portfolio__item-image">
//           <img src={IMG1} alt="" />
//         </div>
//         <h3>This is a portfolio item title</h3>
//         <div className="portfolio__item-cta">
//         <a href="https://github.com" className="btn" target="_blank">Github</a>
//         </div>
//       </article>

//       <article className="portfolio__item">
//         <div className="portfolio__item-image">
//           <img src={IMG1} alt="" />
//         </div>
//         <h3>This is a portfolio item title</h3>
//         <div className="portfolio__item-cta">
//         <a href="https://github.com" className="btn" target="_blank">Github</a>
//         </div>
//       </article>

//       <article className="portfolio__item">
//         <div className="portfolio__item-image">
//           <img src={IMG1} alt="" />
//         </div>
//         <h3>This is a portfolio item title</h3>
//         <div className="portfolio__item-cta">
//         <a href="https://github.com" className="btn" target="_blank">Github</a>
//         </div>
//       </article>
//     </div>
//   </section>;
// };

// export default Portfolio;


import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


const Portfolio = () => {


  const data = [
  {
    id: 1,
    image: IMG1,
    title: 'EasyJOBS',
    github: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Dynamic_Quotes',
    github: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather_Application',
    github: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Calculator',
    github: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Image-slider',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Food_Order_App',
    github: 'https://github.com'
  },
]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio



