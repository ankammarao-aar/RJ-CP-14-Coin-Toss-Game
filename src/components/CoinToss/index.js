// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, resultImage: headsImage}

  onClickToss = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let image = ''
    let prevHeads = heads
    let prevTails = tails

    if (toss === 0) {
      image = headsImage
      prevHeads += 1
    } else {
      image = tailsImage
      prevTails += 1
    }

    this.setState({
      heads: prevHeads,
      tails: prevTails,
      resultImage: image,
    })
  }

  render() {
    const {heads, tails, resultImage} = this.state
    const total = heads + tails

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="tossImage" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>

          <div className="result-card">
            <p className="text">Total: {total}</p>
            <p className="text">Heads: {heads}</p>
            <p className="text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
