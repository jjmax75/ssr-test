import React from 'react';

import Grid from './Grid';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid data={this.props.data} />
      </React.Fragment>
    );
  }
}

export default App;
