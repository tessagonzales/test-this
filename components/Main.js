import React from 'react';
import {
  View,
  Environment,
  asset,
} from 'react-360';
import CardContainer from './CardContainer';
import ExpandCardUI from './ExpandCardUI';

const cardConfig = [
  {
    key: 0,
    thumbnailSrc: 'airplane.jpg',
    backgroundSrc: '',
    title: 'Air',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [],
  },
  {
    key: 1,
    thumbnailSrc: 'travel.jpg',
    backgroundSrc: '',
    title: 'Travel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [
      {name: 'Greece', src: 'greece.jpg'}, 
      {name: 'Grand Canyon', src:'grand-canyon.jpg'}, 
      {name: 'Fiji', src:'fiji.jpg'}
    ]
  },
  {
    key: 2,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [
      {name: 'Hotel1', src: 'hotel1.jpg'}, 
      {name: 'Hotel2', src: 'hotel2.jpg'},
      {name: 'Hotel3', src: 'hotel3.jpg'},
    ]
  },
  // {
  //   key: 3,
  //   thumbnailSrc: 'airplane.jpg',
  //   backgroundSrc: '',
  //   title: 'Air',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   images: []
  // },
  // {
  //   key: 4,
  //   thumbnailSrc: 'travel.jpg',
  //   backgroundSrc: '',
  //   title: 'Travel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Greece', src: 'greece.jpg'}, 
    //   {name: 'Grand Canyon', src:'grand-canyon.jpg'}, 
    //   {name: 'Fiji', src:'fiji.jpg'}
    // ]
  // },
  // {
  //   key: 5,
  //   thumbnailSrc: 'hotel.jpg',
  //   backgroundSrc: '',
  //   title: 'Hotel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   images: [
  //     {name: 'Hotel1', src: 'hotel1.jpg'}, 
  //     {name: 'Hotel2', src: 'hotel2.jpg'},
  //     {name: 'Hotel3', src: 'hotel3.jpg'},
  //   ]
  // },
  // {
  //   key: 6,
  //   thumbnailSrc: 'airplane.jpg',
  //   backgroundSrc: '',
  //   title: 'Air',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   images: []
  // },
  // {
  //   key: 7,
  //   thumbnailSrc: 'travel.jpg',
  //   backgroundSrc: '',
  //   title: 'Travel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Greece', src: 'greece.jpg'}, 
    //   {name: 'Grand Canyon', src:'grand-canyon.jpg'}, 
    //   {name: 'Fiji', src:'fiji.jpg'}
    // ]
  // },
  // {
  //   key: 8,
  //   thumbnailSrc: 'hotel.jpg',
  //   backgroundSrc: '',
  //   title: 'Hotel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Hotel1', src: 'hotel1.jpg'}, 
    //   {name: 'Hotel2', src: 'hotel2.jpg'},
    //   {name: 'Hotel3', src: 'hotel3.jpg'},
    // ]
  // },
  // {
  //   key: 9,
  //   thumbnailSrc: 'airplane.jpg',
  //   backgroundSrc: '',
  //   title: 'Air',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Hotel1', src: 'hotel1.jpg'}, 
    //   {name: 'Hotel2', src: 'hotel2.jpg'},
    //   {name: 'Hotel3', src: 'hotel3.jpg'},
    // ]
  // },
  // {
  //   key: 10,
  //   thumbnailSrc: 'travel.jpg',
  //   backgroundSrc: '',
  //   title: 'Travel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Greece', src: 'greece.jpg'}, 
    //   {name: 'Grand Canyon', src:'grand-canyon.jpg'}, 
    //   {name: 'Fiji', src:'fiji.jpg'}
    // ]
  // },
  // {
  //   key: 11,
  //   thumbnailSrc: 'hotel.jpg',
  //   backgroundSrc: '',
  //   title: 'Hotel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Hotel1', src: 'hotel1.jpg'}, 
    //   {name: 'Hotel2', src: 'hotel2.jpg'},
    //   {name: 'Hotel3', src: 'hotel3.jpg'},
    // ]
  // },
  // {
  //   key: 12,
  //   thumbnailSrc: 'travel.jpg',
  //   backgroundSrc: '',
  //   title: 'Travel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Greece', src: 'greece.jpg'}, 
    //   {name: 'Grand Canyon', src:'grand-canyon.jpg'}, 
    //   {name: 'Fiji', src:'fiji.jpg'}
    // ]
  // },
  // {
  //   key: 13,
  //   thumbnailSrc: 'hotel.jpg',
  //   backgroundSrc: '',
  //   title: 'Hotel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Hotel1', src: 'hotel1.jpg'}, 
    //   {name: 'Hotel2', src: 'hotel2.jpg'},
    //   {name: 'Hotel3', src: 'hotel3.jpg'},
    // ]
  // },
  // {
  //   key: 14,
  //   thumbnailSrc: 'hotel.jpg',
  //   backgroundSrc: '',
  //   title: 'Hotel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  // //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   images: [
  //     {name: 'Hotel1', src: 'hotel1.jpg'}, 
  //     {name: 'Hotel2', src: 'hotel2.jpg'},
  //     {name: 'Hotel3', src: 'hotel3.jpg'},
  //   ]
  // },
  // {
  //   key: 15,
  //   thumbnailSrc: 'hotel.jpg',
  //   backgroundSrc: '',
  //   title: 'Hotel',
  //   subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
  //   description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    // images: [
    //   {name: 'Hotel1', src: 'hotel1.jpg'}, 
    //   {name: 'Hotel2', src: 'hotel2.jpg'},
    //   {name: 'Hotel3', src: 'hotel3.jpg'},
    // ]
  // }
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'space.jpg',
      expandCardUI: false,
      key: null
    }
    this.handleEnvironmentChange = this.handleEnvironmentChange.bind(this);
  }

  handleEnvironmentChange(assetName) {
    Environment.setBackgroundImage(asset(assetName), {
      format: '2D',
    });
  }

  render() {
    const cards = cardConfig.map((card) =>
      <CardContainer
        key={card.key}
        onClick={() => {
          this.setState({ expandCardUI: true, key: card.key})
          // console.log('card key', card.key)
          // this.handleEnvironmentChange(card.thumbnailSrc);
        }}
        thumbnailSrc={card.thumbnailSrc}
        backgroundSrc={card.backgroundSrc}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
        images={card.images}
      />);

    return this.state.expandCardUI ? (
        <ExpandCardUI
          handleEnvironmentChange={this.handleEnvironmentChange}
          keyValue={this.state.key} 
          config={cardConfig[this.state.key]}
        />
      ) : (
      <View
        style={{
          height: 800,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {cards}
      </View>
    );
    // return (
    //   <View>
    //     <UI
    //       cardConfig={cardConfig}
    //       onClick={key => console.log(key) }
    //     />
    //   </View>
    // )
  }
};

export default Main;