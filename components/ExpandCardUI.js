import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-360'
import ExpandCard from './ExpandCard'

class ExpandCardUI extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      keyValue: this.props.keyValue,
      thumbnailSrc: this.props.config.thumbnailSrc,
      backgroundSrc: this.props.config.backgroundSrc,
      title: this.props.config.title,
      subtitle: this.props.config.subtitle,
      description: this.props.config.description,
      images: this.props.config.images
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      keyValue: nextProps.keyValue,
      thumbnailSrc: nextProps.config.thumbnailSrc,
      backgroundSrc: nextProps.config.backgroundSrc,
      title: nextProps.config.title,
      subtitle: nextProps.config.subtitle,
      description: nextProps.config.description,
      images: nextProps.config.images
    });
  }
  render () {
    const { title, description, images, thumbnailSrc } = this.state
    const allImages = images.map((img, idx) => (
      <View
        key={idx}
        style={{
          width: 300,
          backgroundColor: '#FFF',
          alignItems: 'center',
          padding: 10,
          marginBottom: 20
        }}
      >
        <VrButton
          onClick={() => this.props.handleEnvironmentChange(img.src)}
        >
          <Text style={{
            color: 'lightgrey',
            fontSize: 50,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Helvetica',
          }}
          >
          {img.name}
          </Text>
        </VrButton>
      </View>
    ))
    console.log(allImages)
    return (
      <View style={{
        height: 600,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
      }}>
        <View
          style={{
            // height: 500,
            width: 600,
            backgroundColor: '#FFF',
            alignItems: 'center',
            marginRight:20
          }}
        >
          <ExpandCard
            title={title}
            description={description}
            thumbnailSrc={thumbnailSrc}
          />
        </View>

        <View style={{
          flexDirection: 'column',
        }}>
          {allImages}
        </View>
      </View>
    )
  }
}

export default ExpandCardUI;