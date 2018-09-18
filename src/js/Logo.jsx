import React, { Component } from "react";

import random from "lodash/random";
import shuffle from "lodash/shuffle";

/**
quand on click sur le bouton => Bouton.onClick
on verifie si la lettre clique => this.state.letters[i]
est la suivante dans le mot . => ???
**/

class Logo extends Component {
  state = {
    letters: new Array(20).fill(null),
    goodLetters: [],
    usedLetters: []
  }

  componentWillMount () {
    const { letters } = this.state;
    var alphabet = [
      'A','B','C','D','E','F','G','H','I','J','K','L','M',
      'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ];
    var newLetters = shuffle([
      ...this.props.name.toUpperCase().split(''),
      ...(new Array(20 - this.props.name.length)).fill(null).map(() => alphabet[random(0, alphabet.length)])
    ]);

    this.setState({
      letters: newLetters
    })
  }

  render () {
    const { letters, goodLetters, usedLetters } = this.state;
    const { name } = this.props;

    return (
      <div className="Logo">
        <img src={this.props.logo} />
        <ul className="word">
          {
            [...goodLetters, ...(new Array(name.length - goodLetters.length)).fill("")]
            .map((letter) => (
              <li>{letter}</li>
            ))
          }
        </ul>
        <ul className="letters">
          {
            letters.map((letter , i) => (
              <li>
                <button disabled={usedLetters.indexOf(i) >= 0} onClick={() => this.tryLetter(i)}>{letter}</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

  tryLetter (i) {
    const { letters, goodLetters, usedLetters } = this.state;
    const { name, onWin, onPlay } = this.props;

    const partialWord = name.slice(0, goodLetters.length+1).toUpperCase();
    const testWord = goodLetters.join('')+letters[i].toUpperCase();

    onPlay();

    if (partialWord === testWord) {
        this.setState({
          goodLetters: [...goodLetters, letters[i].toUpperCase()],
          usedLetters: [...usedLetters, i]
        }, () => {
          if (name.toUpperCase() === testWord) {
            onWin()
          }
        });
    }
  }
}

export default Logo;
