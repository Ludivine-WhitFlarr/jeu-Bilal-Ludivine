import React, { Component } from 'react';
import Logo from './Logo';

class Quiz extends Component {
  state = {
    nombre: 0,
    score: 0,
    currentIndex: 0,
    nbDeCoups:0
  }
  render() {
    const { currentIndex, nombre , score, nbDeCoups  } = this.state;
    const {  data, title } = this.props;

    const current = data[currentIndex];

    return (
      <div className="Quiz">
        <div className="Quizz">
          <p>NbDePartieJoue: {nombre}</p>
          <p>score: {score}</p>
          <p>NbDeCoup: {nbDeCoups}</p>
        </div>
        <h1>{ title }</h1>
        <Logo key={currentIndex} logo={current.img} name={current.value} onWin={this.onWin} onPlay={this.onPlay} />
      </div>
    );
  }
  onPlay = () => {
    const { nbDeCoups } = this.state;

    this.setState({
      nbDeCoups: nbDeCoups+1,
    })
  }

  onWin = () => {
    const { nombre, score, currentIndex, nbDeCoups  } = this.state;
    const { data } = this.props;

    this.setState({
      nombre: nombre + 1,
      score: score + 20 - (nbDeCoups - data[currentIndex].value.length),
      currentIndex: (currentIndex + 1) % data.length,
      nbDeCoups: 0
    })
  }
}

export default Quiz;
