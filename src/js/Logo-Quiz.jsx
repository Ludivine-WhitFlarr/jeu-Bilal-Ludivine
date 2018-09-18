import React, { Component } from 'react';

import Adidas from '../img/logo/Adidas.png';
import Android from '../img/logo/android.png';
import Apple from '../img/logo/apple.png';
import BurgerKing from '../img/logo/burger-king.png';
import Carambar from '../img/logo/carambar.png';
import CocaCola from '../img/logo/cocacola.png';
import EdenSchool from '../img/logo/ednschool.png';
import Pepsi from '../img/logo/Pepsi.png';
import Puma from '../img/logo/puma.png';

import Quizz from './Quizz';

class LogoQuiz extends Component {
  render() {
    return (
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
        }
      ]} />
    );
  }
}

export default LogoQuiz;
