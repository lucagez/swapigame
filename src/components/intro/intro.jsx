import React from 'react';
import Joyride from 'react-joyride';

const steps = [
  {
    target: '.player-deck',
    content: 'This is your deck of cards. Choose the strongest one!',
    placement: 'top',
  },
  {
    target: '.player-card',
    content: 'The choosen card will be displayed here.',
  },
  {
    target: '.opponent-card',
    content: 'The card choosen from your opponent will be displayed here.',
  },
  {
    target: '.game-button',
    content: 'When you have selected your strongest card, click here to start the fight!',
  },
  {
    target: '.score',
    content: 'Here you can see how the match is going.',
  },
];

const Intro = () => (
  <Joyride
    steps={steps}
    continuous
    showProgress
    showSkipButton
  />
);

export default Intro;
