import React, { Component } from 'react';

import Axoloti from '../img/animaux/axolotl.jpg';
import Emeu from '../img/animaux/emeu.jpg';
import Narval from '../img/animaux/narval.jpg';
import Renard from '../img/animaux/renard.jpg';
import Requin from '../img/animaux/requin.jpg';
import Tarsier from '../img/animaux/tarsier.jpg';
import Tatou from '../img/animaux/tatou.jpg';
import Quizz from './Quizz';

class AnimalQuiz extends Component {
  render() {
    return (
      <Quizz title="Animal Quiz" data={[
        {
          img: Axoloti,
          value: "Axoloti"
        },
        {
          img: Emeu,
          value: "Emeu"
        },
        {
          img: Narval,
          value: "Narval"
        },
        {
          img: Renard,
          value: "Renard"
        },
        {
          img: Requin,
          value: "Requin"
        },
        {
          img: Tarsier,
          value: "Tarsier"
        },
        {
          img: Tatou,
          value: "Tatou"
        }
      ]} />
    );
  }
}

export default AnimalQuiz;
