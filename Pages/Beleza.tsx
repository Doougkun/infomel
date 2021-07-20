import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class Beleza extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Pele",
          text: "\t\t\tMáscaras feitas com mel limpam profundamente a pele, eliminando cravos e espinhas, além de clarear." +
                "\n(SARETTA; BRANDÃO, 2021)",
        },
        {
          title: "Cremes hidratantes",
          text: "\t\t\tCremes com geléia real têm propriedades hidratantes, especialmente na concentração de 0,5 % a 1 %. Agem como emolientes ou umectantes." +
                "\n(KUREK-GÓRECKA et al., 2020)",
        },
        {
          title: "Cosméticos",
          text: "\t\t\tAlguns cosméticos contêm derivados do mel. Como o “Extrato de Mel” que possui propriedades hidratantes, " +
                "o “Mel Hidrogenado” que serve como umectante e o “Mel hidroxipropiltrimônio” utilizado na fabricação de shampoos." +
                "\n(KUREK-GÓRECKA et al., 2020)",
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
        <Text style={{ fontSize: 30, textAlign: "center" }}>{item.title}</Text>
        <Text style={{ fontSize: 25, marginTop: 10, textAlign: "justify" }}>{item.text}</Text>
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

export default Beleza;

