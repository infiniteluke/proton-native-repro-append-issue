import React, { Component } from 'react'; // import from react

import { render, Window, Text, App, Picker, Button, Box, RadioButtons } from 'proton-native'; // import the proton-native components

class Example extends Component {
  state = {
    things: []
  }
  add = (thing) => {
    this.setState({ things: [
      ...this.state.things,
      { id: `thing${this.state.things.length + 1}`, name: `Thing ${this.state.things.length + 1}` },
    ]})
  }
  remove = () => {
    this.setState({ things: [] });
  }
  render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
        <Window title="Proton Native Rocks!" size={{w: 300, h: 300}} menuBar={false}>
          <Box>
            <Text>{`${this.state.things.length} things added`}</Text>
            <Text>The RadioButton.Items and Picker.Items do not reset:</Text>
            <Picker>
              {this.state.things.map(thing => (
                <Picker.Item key={thing.id}>{thing.name}</Picker.Item>
              ))}
            </Picker>
            <RadioButtons>
              {this.state.things.map(thing => (
                <RadioButtons.Item key={thing.id}>{thing.name}</RadioButtons.Item>
              ))}
            </RadioButtons>
            <Button onClick={this.add}>Add</Button>
            <Button onClick={this.remove}>Remove</Button>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
