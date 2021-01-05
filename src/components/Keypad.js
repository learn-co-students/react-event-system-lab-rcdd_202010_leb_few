import React from 'react';

class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input type="password" onKeyUp={(e) => console.log('Entering password...')} />
      </div>
    )
  }
}

export default Keypad
