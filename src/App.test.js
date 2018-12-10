import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// import React, { Component } from 'react';
// import './App.css';
// class App extends Component {
//   state= {
//     ,
//     player: null, 
//     winner: null,
//     selectedArr: []
//   }

//   checkWinner(){
//     let winlines = [
//       ["0","1","2"],
//       ["3","4","5"],
//       ["6","7","8"],

//       ["0","3","6"],
//       ["1","4","7"],
//       ["2","5","8"],

//       ["0","4","8"],
//       ["2","4","6"],
//     ]
//     for (let index = 0; index < winlines.length; index++) {
//       const [a, b, c] = winlines[index];
//       if(this.state.box[a] !== null && this.state.box[a] !== null && this.state.box[c] !== null )
//       {
//         if(this.state.box[a] === this.state.box[b] && this.state.box[a] === this.state.box[c])
//         {
          
//           this.setState(prevstate => ({selectedArr: [...prevstate.selectedArr = a,b,c]}));
//           alert("Player" + " " + this.state.player + " won");
//           this.setState({winner: this.state.player});
//         }
//       }
//     }
//   }
//   handleClick(index){
//     let newvalue = this.state.box;
//     if(!this.state.player)
//     {
//       alert("please select player first");
     
//     }
//     else {
//       if(this.state.box[index] === null && !this.state.winner)
//       {
//         newvalue[index] = this.state.player;
//         this.setState({
//           box: newvalue,
//           player: this.state.player === "X" ? "O" : "X"
//         });
//         this.checkWinner()
//       }
//     }
    
//   }
//   choosePlayer(e){
//     this.setState({player: e.target.value});
//   }
//   reset(e){
//     this.setState({box: null });
//   }
//   render() {
//     const box = this.state.box.map((box ,index) => <div className={this.state.selectedArr.includes(index) ? "box selected" : "box"} key={index} onClick={() => this.handleClick(index)}>{box}</div>);
//     return (
//       <div className="container"> 
//         <h1>Tic tac toe game under process </h1>
//         <form>
//           <label>Choose Player: </label><br></br>
//           <label>Choose X</label>  <input type="radio" name="player" value="X" onClick={ this.choosePlayer.bind(this)}/> <br></br>
//           <label>Choose O</label>  <input type="radio" name="player" value="O" onClick={ this.choosePlayer.bind(this)} /> 
//         </form>
//         <div className="board">
//        {box}
//         </div>
//         <button class="reset" onClick={this.reset.bind(this)}>
//           Reset
//         </button>
//       </div>
//     );
//   }}
// export default App;
