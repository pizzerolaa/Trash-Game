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
      <div className="games-banner">
        <h1> - GAMES - </h1>
        <h2> Our emblematic <strong>UNIVERSES</strong> compendium</h2>
      </div>
      <div className="games-banner-1">
        <div className="games-card">
          <div className="games-image">
            <img src={game4} alt="" />
          </div>
          <div className="games-description">
            <h2>Halo Infinite</h2>
            <p>Halo Infinite is the latest game in the Halo series by 343 Industries. Set on the expansive Zeta Halo, it follows Master Chief as he battles the Banished. The game features an open-world design, blending classic Halo combat with modern enhancements, offering a variety of weapons, vehicles, and equipment for strategic battles.</p>
            <p>The multiplayer experience reimagines classic modes like Slayer and Capture the Flag with new dynamics. Players can customize their Spartans with various armor sets and cosmetics. Regular updates and seasonal content keep the gameplay fresh and engaging, maintaining Halo's legacy as a premier gaming franchise.</p>
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
            <h2>Cyberpunk 2077</h2>
            <p>Cyberpunk 2077 is an open-world RPG by CD Projekt Red, set in the futuristic Night City. Players control V, a customizable mercenary navigating a world of corporate intrigue and cybernetic enhancements. The game offers a deep narrative with branching storylines and multiple endings influenced by player choices.</p>
            <p>Gameplay combines first-person shooting, hacking, and stealth mechanics. Players can upgrade V's skills, acquire cyberware, and use a variety of weapons and gadgets. The immersive world is filled with diverse characters and side quests, capturing the gritty essence of a cyberpunk dystopia. Regular updates and expansions enhance the experience with new content and improvements.</p>
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
            <p>Starfield is a space-themed RPG developed by Bethesda Game Studios. Set in a vast, open-world galaxy, it allows players to explore diverse planets, each with its unique environment and challenges. Players take on the role of a space explorer, customizing their character and spaceship while embarking on a quest filled with mysteries and conflicts across the stars.</p>
            <p>The gameplay features a blend of exploration, combat, and role-playing elements. Players can engage in space battles, discover new worlds, mine resources, and interact with various factions. With its rich storytelling and expansive universe, Starfield promises a deeply immersive experience, continuing Bethesda's tradition of creating detailed and expansive game worlds.</p>
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
            <img src={game1} alt="" />
          </div>
          <div className="games-description">
            <h2>Grand Theft Auto 6</h2>
            <p>GTA 6 is the highly anticipated installment in the Grand Theft Auto series by Rockstar Games. Set in a richly detailed open-world environment, it promises to deliver the same engaging mix of crime, adventure, and satirical storytelling that fans love. Players can expect to navigate through a vibrant cityscape, engaging in missions that range from heists to high-speed chases, all while experiencing an intricate narrative.</p>
            <p>The gameplay is expected to feature a mix of third-person action, driving, and open-world exploration. Players will have access to a wide array of vehicles, weapons, and character customization options. With advancements in graphics and game mechanics, GTA 6 aims to set new standards in the genre, providing an immersive and dynamic experience that reflects Rockstar's commitment to innovation and storytelling.</p>
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
            <p>Elden Ring is an action RPG developed by FromSoftware and published by Bandai Namco Entertainment. Set in a vast, dark fantasy world created by Hidetaka Miyazaki and George R.R. Martin, it features a rich narrative and deep lore. Players explore the Lands Between, seeking to repair the shattered Elden Ring and become the Elden Lord.</p>
            <p>The gameplay combines challenging combat with an open-world experience, offering diverse landscapes, intricate dungeons, and formidable enemies. Players can customize their character, wield various weapons and magic, and summon spirits for assistance. With its expansive world and intricate design, Elden Ring offers a captivating and immersive experience for fans of the genre.</p>
            <div className="games-button">
              <Link to='/reviews'>
                <button>View reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="games-banner">
        <button>More comming soon!</button>
      </div>
    </div>
  )
}

export default Games