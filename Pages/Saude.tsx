import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class Saude extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Valor nutritivo",
          text: "\t\t\tA grande quantidade de hidratos de carbono, como glicose e frutose, faz do mel um alimento com alta concentração de calorias e de grande qualidade." +
                "\n(ZAMBERLAN; SANTOS, 2010)",
        },
        {
          title: "Cicatrização",
          text: "\t\t\tO consumo de mel reduz rapidamente as infecções das feridas edemas, dor e odor, facilitando o processo de cicatrização." +
                "\n(ESCOBAR, 2013)",
        },
        {
          title: "Remédio Natural",
          text: "\t\t\tPesquisas relacionadas à sua composição apontam que o mesmo possui propriedades filantrópicas, tendo como destaque a ação anti-inflamatória e antimicrobiana." +
                "\n(ESCOBAR, 2013)",
        },
        {
          title: "Auxilia na digestão",
          text: "\t\t\tO mel é um ótimo alimento natural para crianças e pessoas debilitadas, devido a qualidade da digestão dos açúcares redutores." +
                "\n(ESCOBAR, 2013)",
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

export default Saude;

