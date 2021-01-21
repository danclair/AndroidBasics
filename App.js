import React from 'react';
import { Button, Text, View} from 'react-native';
export default class App extends React.Component {
  state = {number: 0};
   render() {
       return (
        <View style={{flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 20
        }}>
          <Button title='     –     '
                  color='#e57373'
                  onPress={() => this.decrement()}/>
          <Text>Value = {this.state.number}</Text>
          <Button title='     +     '
                  color='#64B5F6'
                  onPress={() => this.increment()}/>
        </View>
       );
   }
   decrement() {
     this.setState({number: this.state.number - 1});
   }
   increment() {
     this.setState({number: this.state.number + 1});
   }
}