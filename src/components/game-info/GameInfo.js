import Moves from '../moves/Moves'

const GameInfo = ({ status, history, jumpTo }) => {
  return (
    <section className="game-info">
      <div>{status}</div>
      <ol>
        <Moves history={history} jumpTo={jumpTo} />
      </ol>
    </section>
  )
}

export default GameInfo
