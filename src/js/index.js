import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
import Slider from './components/Slider.js';
import ClubsInfo from './components/ClubsInfo.js';

registerSW();

/* place your code below */

//variables related with DOM

const sliderWrapper = document.querySelector('#sliderWrapper');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

const clubsInfoWrapper = document.querySelector('#clubsInfoWrapper');

//components handling
const clubsSlider = new Slider(sliderWrapper, btnPrev, btnNext);
const clubsInfo = new ClubsInfo(clubsInfoWrapper, sliderWrapper);