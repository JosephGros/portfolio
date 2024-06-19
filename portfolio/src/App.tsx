import './App.css'
import WebsiteCard from './components/projectsCard/projectCard';
import mtgTomb from './assets/mtgtomb.png';
import recipeApp from './assets/recipeApp.png';
import weatherApp from './assets/weatherApp.png';
import hangman from './assets/starwars.png';

function App() {

  return (
    <>
    <div className="transition-max-height duration-300 overflow-y-auto shadow-inner snap-x snap-mandatory">
    <div className="flex flex-wrap justify-center">
      <WebsiteCard 
      text="MTG Tomb" 
      content="This application is something we made for a school project. The application is for the card game Magic the Gathering. The purpose of the application is to simplify the sorting and deck building for the users. Updates and cleaning of the application are coming soon!"
      url="https://mtg-tomb.netlify.app/" 
      image={mtgTomb}
      />
      <WebsiteCard 
      text="Weather App" 
      content="Weather Center is an application created for a school project that uses a weather API to gather the weather information. It also uses geolocation to get the users position to get the weather for that specifik position."
      url="https://weathercenter.netlify.app/" 
      image={weatherApp}
      />
      <WebsiteCard 
      text="Recipe App"
      content="Weather Center is an application created for a school project that uses a weather API to gather the weather information. It also uses geolocation to get the users position to get the weather for that specifik position."
      url="https://second-breakfast.netlify.app/" 
      image={recipeApp}
      />
      <WebsiteCard 
      text="Star Wars Hangman"
      content="Weather Center is an application created for a school project that uses a weather API to gather the weather information. It also uses geolocation to get the users position to get the weather for that specifik position."
      url="https://starwars-hangman-game.netlify.app/" 
      image={hangman}
      />
    </div>
    </div>
    </>
  )
}

export default App
