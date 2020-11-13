import React,{useState,useEffect} from 'react'
import Square from "./Square";


const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "300px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
  borderRadius:"10px"
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "20px",
};

const buttonStyle = {
  margin: "15px 25px",
  padding:"10px 10px 10px 10px",
  width: "100px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
  borderRadius:"10px",
  border:"none",
  outline:"none"
};

function Board() {

    const [nextPlayer, setNextPlayer] = useState("X");
    const [play, setPlay] = useState(["", "", "", "", "", "", "", "", ""]);
    const [winner, setWinner] = useState("");


    const restHandler = () => {
      setNextPlayer("X");
      setPlay(["", "", "", "", "", "", "", "", ""]);
      setWinner("");
    };

    useEffect(() => {
      winnerCalc();
    }, [play]);

    const squareClick =(num) => {
      if (winner) {
        return;
      }
      if (nextPlayer=== "X") {
        let a = [...play];
        a.splice(num - 1, 1, "X");

        setNextPlayer("O")
        setPlay((prev)=>a)

      } else {
        let a = [...play];
        a.splice(num - 1, 1, "O");

        setNextPlayer("X")
        setPlay((prev)=>a)
      }
    };

    const winnerCalc = () => {
      let a = play;
      console.log(a);
      if (a[0] !== "" &&((a[0] === a[1] && a[1] === a[2]) || (a[0] === a[3] && a[3] === a[6]))) {
        setWinner(a[0]);
        return;
      }
      if (a[8] !== "" &&((a[8] === a[7] && a[7] === a[6]) || (a[8] === a[5] && a[5] === a[2]))) {
        setWinner( a[8]);
        return;
      }
      if (a[4] !== "" &&((a[4] === a[0] && a[4] === a[8]) ||(a[4] === a[2] && a[4] === a[6]) ||(a[4] === a[3] && a[4] === a[5]) ||(a[4] === a[1] && a[4] === a[7]))) {
        setWinner(a[4]);
        return;
      }
    };


    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={{...instructionsStyle,color:nextPlayer==="X"?"red":"blue"}}>
          Next player: {nextPlayer}
        </div>
        <div className="winner" style={{...instructionsStyle,  color:winner==="X"?"red":winner==="O"?"blue":""}}>
          Winner: {winner}
          <br />
          {winner&&"🎉🎊🎇🎁"}
        </div>
        <button style={buttonStyle} onClick={restHandler}>
          Reset
        </button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square
              value={play[0]}
              num={1}
              squareClick={squareClick}
            />
            <Square
              value={play[1]}
              num={2}
              squareClick={squareClick}
            />
            <Square
              value={play[2]}
              num={3}
              squareClick={squareClick}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              value={play[3]}
              num={4}
              squareClick={squareClick}
            />
            <Square
              value={play[4]}
              num={5}
              squareClick={squareClick}
            />
            <Square
              value={play[5]}
              num={6}
              squareClick={squareClick}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              value={play[6]}
              num={7}
              squareClick={squareClick}
            />
            <Square
              value={play[7]}
              num={8}
              squareClick={squareClick}
            />
            <Square
              value={play[8]}
              num={9}
              squareClick={squareClick}
            />
          </div>
        </div>
      </div>
    );
}

export default Board
