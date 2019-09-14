import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
    score:0,
    highScore: 0
  };

  shuffleArray = () => {
    friends.sort(()=> { return 0.5- Math.random() });
  }

  handleClick = id => {
    let score =this.state.score
    let highScore=this.state.highScore
    const friends = this.state.friends
    const clickedFriend = friends.filter(friend => friend.id === id);
    if (clickedFriend[0].clicked) {
      this.setState({ score:score=0 });

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

    }
    else if (score < friends.length) {
      clickedFriend[0].clicked = true;
      this.setState({score})
      score++

    }
    if (clickedFriend[0].clicked===true){
      this.setState({friends });
      this.setState({score });


    }

    if (score > highScore) {
      this.setState({highScore:highScore = score})
      this.setState({ highScore });

      this.shuffleArray()
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
        <Title>Memory Game</Title>
        

        {this.state.friends.map(friend => <FriendCard handleClick={this.handleClick} key={friend.id} id={friend.id} image={friend.image} {...friend} />)}

      </Wrapper>
    )
  }
}


export default App;
