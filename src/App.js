import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    box: Array(9).fill(""),
    player: "X",
    winner: '',
    winningb0x: [0,1,2]
  }
  resetval(){
    this.setState({
      box: Array(9).fill(''),
      winner: []
  });
  }

  checkWinner(){
    let winner = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],

      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],

      ["0","4","8"],
      ["2","4","6"],
    ]

    for (let index = 0; index < winner.length; index++) {
      const [a,b,c] = winner[index];
      if(this.state.box[a] !=="" && this.state.box[a] === this.state.box[b] && this.state.box[b] === this.state.box[c] && this.state.box[c] === this.state.box[a])
      {
        alert("Player " + this.state.player + " won");
        this.setState({winner:  this.state.player})
        this.setState(prevstate=>({winningb0x: [...prevstate.winningb0x = a,b,c]}));
      }
    }
  }
  handleClick(index){
    if(this.state.box[index] === "" && this.state.winner === '')
    {
      let newval = this.state.box;
      newval[index] = this.state.player;
      this.setState({
        player: this.state.player === "X" ? "O" : "X",
        box: newval
      })
      this.checkWinner();
    }
  }
  render(){
    
    console.log(this.state.winningb0x);
    const box = this.state.box.map((box , index) => 
        <div className ={this.state.winningb0x.includes(index) ? "box win-col" : "box"}  onClick={() => this.handleClick(index)}>{box}</div>)
        console.log(box);
    return(
      <div className="container">
        <div className="board">
          {box}
        </div>
        <button onClick={() => this.resetval()}>Reset</button>
      </div>
    )
  }
}
export default App;