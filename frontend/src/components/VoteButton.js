import React from 'react';

class VoteButton extends React.Component {
  constructor() {
    super()
      this.state = {
        vote: false
      }
    }
    
    handleVoteClick = () => {
      this.setState({ vote: !this.state.vote })
    }

    render() {  
      return (
      <div>
        <button onClick={() => this.handleVoteClick()}>{this.state.vote ? '1' : '0'}</button>
      </div>
    )
    }
}

export default VoteButton
