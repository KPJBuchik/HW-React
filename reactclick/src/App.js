import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

let score = 0
let highScore = 0
class App extends React.Component {
  state = {
    friends,
    score:0,
    highScore:0
  };

  handleClick = id => {
    const friends = this.state.friends
    const clickedFriend = friends.filter(friend => friend.id === id);
    if (clickedFriend[0].clicked) {
      score = 0

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      this.setState({ score });
      this.setState({ friends });
    }
    else if (score < 8) {
      clickedFriend[0].clicked = true;
      score++

    }

    if (score > highScore) {
      highScore = score;
      this.setState({ highScore });


      friends.sort(()=> { return .5- Math.random() });
      this.setState({ friends });
      this.setState({ score });

    } else {
      clickedFriend[0].clicked = true;
      score = 0;
      this.setState({ highScore });
      score++
      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      friends.sort( () => { return 0.5 - Math.random() });

      this.setState({ friends });
      this.setState({ score });

    }
  };

  render() {
    return (
      <Wrapper>
              <div className="scores">
          Score: {this.state.score}<br></br>
          High Score: {this.state.highScore}
        </div>
        <Title>Clicky Game</Title>
        

        {this.state.friends.map(friend => <FriendCard handleClick={this.handleClick} key={friend.id} id={friend.id} image={friend.image} />)}

      </Wrapper>
    )
  }
}


export default App;
