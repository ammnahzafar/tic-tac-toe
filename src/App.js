import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(){
    super()

    this.state = {
      board: 
      [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
      ],
      currentPlayer: 1,
      winner: 0,
      turns: 0
    }
  }

  onButtonClick(row, col){
    console.log(row, col);

    let newBoard = [...this.state.board]

    let piece = "x";

    if(this.state.currentPlayer === 2){
      piece = "o"
    }

    newBoard[row][col] = piece;

    this.setState({
      board: newBoard,
      turns: this.state.turns+1
    })

    //after we place the piece on the board, check if someone won
    if(this.isVerticalWin(newBoard) || this.isHorizontalWin(newBoard) || this.isDiagonalWin(newBoard)){
      this.setState({winner: this.state.currentPlayer})
    }

    if(this.state.currentPlayer === 1){
      this.setState({currentPlayer: 2})
    }else{
      this.setState({currentPlayer: 1})
    }

  }

  isVerticalWin(board) {
		if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
			if (board[0][0] !== " " && board[1][0]!== " " && board[2][0]!== " ") {
				return true;
			}

		} 
		
		if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
			if (board[0][1] !== " " && board[1][1] !== " " && board[2][1] !== " ") {
				return true;
			}
		} 
		
		if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
			if (board[0][2] !== " " && board[1][2] !== " " && board[2][2] !== " ") {
				return true;
			}

		}

		return false;
  }
  
  isHorizontalWin(board) {
		if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
			if (board[0][0] !== " " && board[0][1] !== " " && board[0][2] !== " ") {
				return true;
			}
		} 
		
		if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
			if (board[1][0] !== " " && board[1][1] !== " " && board[1][2] !== " ") {
				return true;
			}

		} 
		
		if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
			if (board[2][0] !== " " && board[2][1] !== " " && board[2][2] !== " ") {
				return true;
			}
		}

		return false;
  }
  
  isDiagonalWin(board) {
		if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
			if (board[0][0] !== " " && board[1][1]!== " " && board[2][2] !== " ") {
				return true;
			}

		} 
		
		if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
			if (board[2][0] !== " " && board[1][1] !== " " && board[0][2] !== " ") {
				return true;
			}

		}

		return false;
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tic Tac Toe!</h1>
        </header>

          <br/>
          <div>
            Click buttons to begin  :)
          </div>

          <br/>

          {
            this.state.board.map((row, index) => {
              return (
                <div key={index}>
                  {
                    row.map((col, itemIndex) => {
                      return <Button 
                      onClick={e => {this.onButtonClick(index, itemIndex)}}
                      variant="outlined" 
                      key={`${index}c${itemIndex}`}
                      disabled={this.state.winner || this.state.turns === 9}
                      >{col}
                      
                      </Button>
                      
                    })
                  }
                </div>
              )
            })
          }

          <br/>

          <div>
            The winner is: {
              this.state.winner === 0 ? ' ' : this.state.winner
            }
          </div>

      
      </div>
    );
  }
}

export default App;
