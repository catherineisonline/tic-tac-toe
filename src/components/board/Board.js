import Square from '../square/Square'

const Board = ({ squares, onClick, jumpTo }) => {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />
  }
  return (
    <section className="game-section">
      <section className="game-board">
        <section className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </section>
        <section className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </section>
        <section className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </section>
      </section>
      <button className="restart" onClick={() => jumpTo(0)}>
        Restart the game
      </button>
    </section>
  )
}

export default Board
