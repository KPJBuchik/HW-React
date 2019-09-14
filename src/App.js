import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
    score: 0,
    highScore: 0
  };




  handleClick = (id, clicked) => {
    const friendsClick = this.state.friends;

    if (clicked && this.state.score<friends.length) {
      friendsClick.forEach((friend, i) => {
        friendsClick[i].clicked = false;
      });
      return this.setState({
        friend: friendsClick.sort(() => Math.random() - 0.5),

        score: 0
      })
    } 
    else {
      friendsClick.forEach((friend, i) => {
        if (id === friend.id) {
          friendsClick[i].clicked = true;
        }
      });
      const { highScore, score } = this.state;
      const scored = score + 1;
      const newHighScore = scored > highScore ? scored : highScore;

      return this.setState({
        friend: friendsClick.sort(() => Math.random() - 0.5),
        score: scored,
        highScore: newHighScore,
      })
    }
  };



  render() {
    return (
      <Wrapper>
        <div className="scores">
          Score: {this.state.score}<br></br>
          High Score: {this.state.highScore}
        </div>
        <Title>Memory Game</Title>


        {this.state.friends.map(friend => <FriendCard handleClick={this.handleClick} key={friend.id} id={friend.id} image={friend.image} {...friends} />)}

      </Wrapper>
    )
  }

}

export default App;
