import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assets/EasyJOBS.jpg"
import IMG2 from "../../assets/dynamic_quotes.jpg"
import IMG3 from "../../assets/weather_application.avif"
import IMG4 from "../../assets/Calculator.jpg"
import IMG5 from "../../assets/image-slider.jpg"
import IMG6 from "../../assets/food_order_app.jpg"


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
    title: 'Image_slider',
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
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio




