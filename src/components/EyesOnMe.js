// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  handelOnFocus = () => console.log('Good!')

  handelOnBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.handelOnFocus} onBlur={this.handelOnBlur}>
        Eyes on me, please!
      </button>
    )
  }
}
