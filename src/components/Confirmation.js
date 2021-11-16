import React from "react";
import PropTypes from "prop-types";

//approach 1 - "counter" of which step we're on lives in parent and we pass it as props
//approach 2 "step counter " state lives here. - parent just decides whether to show it, this component tracks its own steps with local state
// yes and no buttons, no sends user back to ticket list. yes moves to next message until we reach 4, then 4 sends it to the new page
// 2- "Have you gone through all the steps on the Learn How to Program debugging lesson?"
// 3- "Have you asked another pair for help?"
// 4- "Have you spent 15 minutes going through through the problem documenting every step?"
function Confirmation(props){
  let message = '';
  if (props.step === 2) {
    message = "Have you gone through all the steps on the Learn How to Program debugging lesson?";
  } else if (props.step === 3) {
     message = "Have you asked another pair for help?";
  } else if (props.step === 4) {
    message = "Have you spent 15 minutes going through through the problem documenting every step?";
  }
  return(
    <>
      <h1>{message}</h1>
      <button onClick={props.handleClick}>Yes</button>
      <button onClick={props.resetClick}>No</button>
    </>
  );
}

Confirmation.propTypes = {
  step: PropTypes.number,
  handleClick: PropTypes.func,
  resetClick: PropTypes.func
}

export default Confirmation;