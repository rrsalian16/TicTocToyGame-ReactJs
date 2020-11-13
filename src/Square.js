import React from 'react';

const squareStyle = {
  width: "90px",
  height: "90px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "45px",
  fontWeight:"bold",
  color: "white",
};


const Square = (props) => {

    const clickHandler = () => {
      if (!props.value) {
        props.squareClick(props.num);
      }
    };

    return (
      <div className="square" style={ {...squareStyle, color:props.value==="X"?"red":"blue"}} onClick={clickHandler}>
        {props.value}
      </div>
    );
}

export default Square;
