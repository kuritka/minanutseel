/*eslint-disable import/default */

//to enable application uncomment these!! 
// import 'babel-polyfill';
// import React from 'react';
// import { render } from 'react-dom';
// import configureStore from './store/configureStore';
// import {Provider} from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
// import store from './store';
// import '../node_modules/toastr/build/toastr.min.css';


//import './styles/styles.css'; //Webpack can import CSS files too!
//import './styles/slider.css';

import './styles/common.scss';
import './styles/animatedText.scss';
import './styles/navicon.scss';
import './styles/font-awesome.min.css'; 
import './styles/arrowBounce.scss';
import './styles/sections/main.scss';
import './styles/sections/team.scss';
import './styles/sections/overview.scss';
import './styles/sections/overview.animate.scss'; //generated from https://daneden.github.io/animate.css/ because wow.js works well with it


import $ from 'jquery';
import WOW from './../vendor/wow.js';
 window.wow = new WOW.WOW({ live: false });




//import './styles/bounceIn.scss';



//import './img/Nusle00.jpg'; 
 
 

/*render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);*/
