import React, { useState } from 'react';
import './App.css';
import profilepic from './assets/portofoliololo/profilbild.jpg';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'sv'>('en');

  const switchLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'sv' : 'en'));
  };

  const text = {
    en: {
      paragraphs: [
        "Hello! I'm Joseph Gros, a passionate 26-year-old originally from America, now embracing life in Sweden since the age of four. Currently, I reside in Salem with my wonderful wife Anna and our newborn son, Noah. This November, we're eagerly looking forward to moving to something bigger in Gnesta.",
        "My educational journey has been deeply focused on technology and development. I am currently enrolled in the Fullstack Web Developer program at CHAS Academy, with an expected completion date in June 2025. My academic foundation was laid at Rönninge Gymnasium, specializing in Technology with a focus on Information and Media.",
        "From a young age, I've been drawn to the intricacies of programming and problem-solving, finding joy in creating structured solutions. This passion naturally led me to discover web development, where I've found my calling. It's not just a career path for me; it's a fulfilling daily pursuit that blends seamlessly with my personal interests.",
        "Beyond coding, I cherish spending quality time with my family and friends, indulging in my hobbies such as playing video games and enjoying the strategic gameplay of Magic: The Gathering. These activities not only provide relaxation but also stimulate my mind, enhancing my problem-solving skills in unexpected ways.",
        "In summary, my life revolves around the harmonious balance of family, education, and personal interests. Each day presents new opportunities to grow as a developer and as a person, driven by my love for structured problem-solving and my unwavering commitment to creating meaningful experiences through web development."
      ]
    },
    sv: {
      paragraphs: [
        "Hej! Jag heter Joseph Gros och jag är en passionerad 26-åring som ursprungligen kommer från Amerika, men som nu njuter av livet i Sverige sedan jag var fyra och ett halvt år gammal. För närvarande bor jag i Salem med min underbara fru Anna och vår nyfödde son, Noah. I november ser vi fram emot att flytta till ett radhus i Gnesta.",
        "Min utbildningsresa har varit djupt fokuserad på teknik och utveckling. Jag är för närvarande inskriven i Fullstack Web Developer-programmet på CHAS Academy, med en förväntad avslutning i juni 2025. Min akademiska grund lades på Rönninge Gymnasium, där jag specialiserade mig på Teknik med inriktning på Information och Media.",
        "Sedan ung ålder har jag dragits till programmeringens och problemlösningens detaljer, och jag finner glädje i att skapa strukturerade lösningar. Denna passion ledde mig naturligt till att upptäcka webbutveckling, där jag har funnit mitt kall. Det är inte bara en karriärväg för mig; det är en uppfyllande daglig strävan som smälter samman med mina personliga intressen.",
        "Förutom att koda, värdesätter jag att spendera kvalitetstid med min familj och mina vänner, och att njuta av mina hobbies såsom att spela videospel och njuta av det strategiska spelet Magic: The Gathering. Dessa aktiviteter ger mig inte bara avkoppling, utan stimulerar också mitt sinne, vilket förbättrar mina problemlösningsförmågor på oväntade sätt.",
        "Sammanfattningsvis kretsar mitt liv kring den harmoniska balansen mellan familj, utbildning och personliga intressen. Varje dag ger nya möjligheter att växa som utvecklare och som person, drivet av min kärlek för strukturerad problemlösning och min orubbliga strävan att skapa meningsfulla upplevelser genom webbutveckling."
      ]
    }
  };

  return (
    <div className="w-3/5 flex flex-wrap mt-8">
      <div className='flex flex-row my-4 w-full'>
        <img className="object-cover w-60 rounded-md" src={profilepic} />
        <button onClick={switchLanguage} className='mx-4 self-end h-10 bg-slate-950 p-2 rounded-md hover:text-slate-400'>
          Switch to {language === 'en' ? 'Swedish' : 'English'}
        </button>
      </div>
      {text[language].paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph} <br /><br /></p>
      ))}
    </div>
  );
}

export default App;