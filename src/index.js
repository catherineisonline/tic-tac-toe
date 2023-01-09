import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Friends from './assets/images/friends.jpg'
import calculateWinner from './helpers/calculateWinner'
import Board from './components/board/Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <section className="game">
        <section className="game-information">
          {this.state.xIsNext && !winner ? (
            <h3 className="player-x">It's your turn</h3>
          ) : !this.state.xIsNext && !winner ? (
            <h3 className="player-o">Now you! </h3>
          ) : winner && status === 'Winner: X' ? (
            <h3 className="player-x">Nice! I won! </h3>
          ) : (
            <h3 className="player-o">Wohoo! I made it!</h3>
          )}
          <img src={Friends} alt="" />
        </section>

        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
      </section>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)
