import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class MeioAmbiente extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Polinização",
          text: "\t\t\tCerca de 80% da polinização que ocorre em vegetais é realizada pelas abelhas. Beneficiando o meio ambiente e até mesmo atividades agrárias." +
                "\n(MARTINS, 2016)",
        },
        {
          title: "Matas Ciliares",
          text: "As matas ciliares são excelentes fornecedoras de alimentos para as abelhas. Com a polinização das abelhas neste tipo de vegetação " +
                "há a garantia de conservação de recursos hídricos." +
                "\n(MARTINS, 2016)",
        },
        {
          title: "Educação Ambiental",
          text: "\t\t\tDevido a grande importância das abelhas no meio ambiente, produtores de mel passam a agir contra a " +
                "destruição e degradação da natureza, utilizando a educação ambiental junto a pessoas próximas."+
                "\n(MARTINS, 2016)",
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
  }
});

export default MeioAmbiente;
