import React from 'react';

function Buttons(props) {
  return (
    <div>
      <button type="button" className={`btn btn-${props.color} mx-2 my-2`} onClick={props.changeColor} />
    </div>
  )
}

export default Buttons
