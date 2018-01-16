import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

export default class PlayerCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
      }

    onPress = () => {
        this.setState({
          count: this.state.count+1,
        })
      }

    countPlayersMax(count) {
        return count > 5 ? 5 : count
    }

}