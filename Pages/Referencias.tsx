import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class Referencias extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          text: "MARTINS, 2016." +
                "\n\nSARETTA; BRANDÃO, 2021." +
                "\n\nTEIXEIRA, 2015." +
                "\n\nZAMBERLAN; SANTOS, 2010."
                ,
        },
        {
          text: "TEIXEIRA, L. V.; VERÍSSIMO, S. A. O. Mel e derivados: a inspeção dos produtos apícolas é responsabilidade do médico veterinário. Cad. técn. Vet. Zoot., p. 115-129, 2015.",
        },
        {
          text: "\n\nZAMBERLAN, L.; SANTOS, D. M. dos. O comportamento do consumidor de mel: um estudo exploratório. Revista de Administração e Ciências Contábeis, v. 5, n. 10, p. 45-50, 2010",
        },
        {
          text: "Text 4",
        },
        {
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: 'rgba(252,214,21,0.75)',
          borderRadius: 5,
          height: '90%',
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 25, marginTop: 10, textAlign: "left" }}>{item.text}</Text>
      </View>
    );
  }

  
  get pagination () {
    const { carouselItems, activeIndex } = this.state;
    return (
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          containerStyle={{ backgroundColor: 'rgba(252,214,21,0.92)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(35, 33, 44, 1.00)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          layout={"default"}
          data={this.state.carouselItems}
          sliderWidth={350}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
         { this.pagination }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'rgba(252,214,21,0.50)'
  },
});

export default Referencias;

