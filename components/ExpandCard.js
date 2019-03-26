import React from 'react';
import {
  View,
  Text,
  Image,
  asset
} from 'react-360'

class ExpandCard extends React.Component {
  render () {
    const { title, description, thumbnailSrc } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          // height: 500,
        }}
      >
        <Text style={{
          color: 'lightgrey',
          fontSize: 50,
          fontWeight: 'bold',
          textAlign: 'left',
          fontFamily: 'Helvetica',
          padding: 30,
        }}>
          {title}
        </Text>
        <Text style={{
          color: 'grey',
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'Helvetica',
        }}>
          {description}
        </Text>
        <Image
          style={{
            width: 500,
            height: 250,
          }}
          source={asset(thumbnailSrc)}
        />
      </View>
    )
  }
}

export default ExpandCard;