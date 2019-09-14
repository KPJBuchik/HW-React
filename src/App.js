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

  

  handleClick = id => {
  let friends=this.state.friends

   let score=this.state.score
   let highScore=this.state.highScore
   friends.sort(() => Math.random() - 0.5)
   const clickedFriend = this.state.friends.filter(friend => friend.id === id);
    clickedFriend[0].clicked=true
    if (clickedFriend[0].clicked) {
      this.setState({score:score})
      clickedFriend[0].clicked = true;

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      this.setState({ score:this.state.score+1 });
      this.setState({ highScore:this.state.highScore+1 });

    }
    else if (clickedFriend[0].clicked === true) {
      this.setState({ score:score=0 });

    }
    if (score===8 || friends.clicked===true){
    this.setState({ score:this.state.score=0 });
    this.setState({ highScore:this.state.highScore=8 });

    clickedFriend[0].clicked=true

    }if (score>highScore){
      this.setState({ friends });
      this.setState({score})


    }

    return 

    
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
