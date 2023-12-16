import './index.css'

const Result = props => {
  const {score, onClickPlayAgainBtn} = props

  const playAgain = () => {
    onClickPlayAgainBtn()
  }
  return (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />

      <p className="your-score-heading">YOUR SCORE</p>
      <h2 className="result-page-score">{score}</h2>
      <button type="button" className="reset-btn" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default Result
