import React from 'react';
import { FaDice } from "react-icons/fa";
import styled from 'styled-components'


const Reroll = () => {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Button>
        <button onClick={refreshPage}><FaDice/> Click to reload !</button>
      </Button>
    </div>
  );
}


const Button = styled.div`
  color: black;
  border: none;
`

export default Reroll;
