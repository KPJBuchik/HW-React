import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";



class App extends React.Component {
  state = {
   score:0,
    highScore:0
  };

  handleClick = id => {
    this.setState({score: this.state.score+1})
    this.setState({score: this.state.highScore+1})
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>



        {friends.map(person => <FriendCard key={person.id} {...person} />)}

      </Wrapper>
    )
  }
}


export default App;
