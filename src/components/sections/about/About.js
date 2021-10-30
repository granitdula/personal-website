import React from 'react';
import './About.css';
import Flipcard from '../../flipcard/Flipcard';
import SkillsContent from '../../flipcard-contents/skills-content/SkillsContent.js';
import AchievementContent from '../../flipcard-contents/achievement-content/AchievementContent.js';
import InterestContent from '../../flipcard-contents/interest-content/InterestContent.js';
import HobbiesContent from '../../flipcard-contents/hobbies-content/HobbiesContent.js';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-background'>
        <h1>About</h1>
        <div className='flipcards-container'>
          <Flipcard title='Skills' content={<SkillsContent/>}/>
          <Flipcard title='Achievements' content={<AchievementContent/>}/>
          <Flipcard title='Interests' content={<InterestContent/>}/>
          <Flipcard title='Hobbies' content={<HobbiesContent/>}/>
        </div>
      </div>
    </div>
  );
}

export default About