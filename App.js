import React from 'react';
import { 
  Button, Text, TextInput,
  Image, ActivityIndicator,
  Platform, StyleSheet, View, ProgressBarAndroid 
} from 'react-native';
import axios from 'axios';


export default class App extends React.Component {
  state = {text: '', loading: false, error: null, imgUrl: null}
  return (
    <View style={styles.containerStyle}>
    <TextInput
        style={styles.textInputStyle}
        placeholder="Enter text to search an image"
        returnKeyType='search'
        autoFocus={true}
        onChangeText{(text) => this.setState({text})}
        onSubmitEditing={() => this.searchPicture()}/>
    onChangeText={(text) => this.setState({text})}
    onSubmitEditing={() => this.searchPicture()}
    {
        this.state.imgUrl &&
        <Image
            source={{uri: this.state.imgUrl}}
            style={{flex: 1}}/>
    }
    </View>
  );

  searchPicture() {
    this.setState({loading: true, error: null, imgUrl: null});
    axios.get('https://www.reddit.com/r/pics/search.json', {
      params: {
        restrict_sr: 'on',
        limit: 1,
        sort: 'new',
        q: this.state.text
      }
    }).then(response => {
      this.setState({
        imgUrl: response.data.data.children[0]
            .data.preview.images[0].source.url,
        error: null, loading: false
      })
    }).catch(error => {
      this.setState({error: error.message, loading: false, imgUrl: null})
    })
  }
}