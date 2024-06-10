import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/games.css'
import game1 from '../assets/gta6.jpg'
import game2 from '../assets/cyber2077.jpg'
import game3 from '../assets/Starfield.jpg'
import game4 from '../assets/halo.jpg'
import game5 from '../assets/eldenring.jpg'

const Games = () => {
  return (
    <div className="games-page">
      {/* <h1>Games</h1> */}
      <div className="games-banner-1">
        <div className="games-card">
          <div className="games-image">
            <img src={game1} alt="" />
          </div>
          <div className="games-description">
            <h2>Grand Theft Auto 6</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <div className="games-button">
              <Link to='/reviews'>
                <button>View reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="games-banner-2">
        <div className="games-card">
          <div className="games-image">
            <img src={game2} alt="" />
          </div>
          <div className="games-description">
            <h2>Cyber Punk 2077</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <div className="games-button">
              <Link to='/reviews'>
                <button>View reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="games-banner-1">
        <div className="games-card">
          <div className="games-image">
            <img src={game3} alt="" />
          </div>
          <div className="games-description">
            <h2>Starfield</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <div className="games-button">
              <Link to='/reviews'>
                <button>View reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="games-banner-2">
        <div className="games-card">
          <div className="games-image">
            <img src={game4} alt="" />
          </div>
          <div className="games-description">
            <h2>Halo Infinite</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <div className="games-button">
              <Link to='/reviews'>
                <button>View reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="games-banner-1">
        <div className="games-card">
          <div className="games-image">
            <img src={game5} alt="" />
          </div>
          <div className="games-description">
            <h2>Elden Ring</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi doloribus perspiciatis fugiat ex facilis nostrum ea dolores architecto dolorem iure, quod praesentium temporibus in ullam. Molestiae a autem ea!</p>
            <div className="games-button">
              <Link to='/reviews'>
                <button>View reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games