import React, { Component } from 'react';
import Logo from "../../img/logo-Logo.png";
import Adidas from              '../../img/logo/Adidas.png';
import Android from             '../../img/logo/android.png';
import Apple from               '../../img/logo/apple.png';
import BurgerKing from          '../../img/logo/burger-king.png';
import Carambar from            '../../img/logo/carambar.png';
import CocaCola from            '../../img/logo/cocacola.png';
import EdenSchool from          '../../img/logo/ednschool.png';
import Facebook from            '../../img/logo/facebook.png';
import Fedex from               '../../img/logo/fedex.png';
import Instagram from           '../../img/logo/Instagram.png';
import Lacoste from             '../../img/logo/lacoste.jpg';
import LouisVuitton from        '../../img/logo/louis-vuitton.png';
import McDonald from            '../../img/logo/mcdo.png';
import MozillaFirefox from      '../../img/logo/mozillafirefox.png';
import Nasa from                '../../img/logo/nasa.png';
import Orange from              '../../img/logo/orange.png';
import Pepsi from               '../../img/logo/Pepsi.png';
import Puma from                '../../img/logo/puma.png';
import Renaud from              '../../img/logo/renaud.png';
import Snapchat from            '../../img/logo/snap.png';


import Quizz from './Quizz';
class LogoQuiz extends Component {
  render() {
    return (
      <div className="bodyquiz">
          <div className="Header">

              <h1><img className="imgh1" alt="logo" src={Logo}/>uiz</h1>
          </div>
      <Quizz title="Logo Quizup" data={[
        {
          img: Adidas,
          value: "Adidas"
        },
        {
          img: Android,
          value: "Android"
        },
        {
          img: BurgerKing,
          value: "BurgerKing"
        },
        {
          img: Apple,
          value: "Apple"
        },
        {
          img: CocaCola,
          value: "CocaCola"
        },
        {
          img: Puma,
          value: "Puma"
        },
        {
          img: Carambar,
          value: "Carambar"
        },
        {
          img: EdenSchool,
          value: "EdenSchool"
        },
        {
          img: Pepsi,
          value: "Pepsi"
        },
        {
          img: Facebook,
          value: "Facebook"
        },
        {
          img: Fedex,
          value: "Fedex"
        },
        {
          img: Instagram,
          value: "Instagram"
        },
        {
          img: LouisVuitton,
          value: "LouisVuitton"
        },
        {
          img: McDonald,
          value: "McDonald"
        },
        {
          img: Nasa,
          value: "Nasa"
        },
        {
          img: Orange,
          value: "Orange"
        },
        {
          img: Renaud,
          value: "Renaud"
        },
        {
          img: Snapchat,
          value: "Snapchat"
        },
        {
          img: MozillaFirefox,
          value: "MozillaFirefox"
        },
        {
          img: Lacoste,
          value: "Lacoste"
        }
      ]} />
      <div className="bouton game">
        <div className="butdiv">
          <a href="/">Retour</a>
        </div>
      </div>
      </div>
    );
  }
}

export default LogoQuiz;
