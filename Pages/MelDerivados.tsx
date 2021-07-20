import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class MelDerivados extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Mel",
          text: "\t\t\tO mel é o produto resultante da ação de enzimas salivares das abelhas sobre o néctar colhido das flores, sendo armazenado em favos em suas colmeias." +
                "\n(TEIXEIRA; VERÍSSIMO, 2015)",
        },
        {
          title: "Utilização",
          text: "\t\t\tO mel mais escuro é mais utilizado como medicamento e o mel mais claro na gastronomia." +
                "\n\t\t\tO maior uso dado ao mel é combinado com outros alimentos ou como remédio." +
                "\n(RIBEIRO et al, 2009)",
        },
        {
          title: "Outros produtos",
          text: "\t\t\tAlém do mel, as colmeias são uma fonte de produtos nutritivos e com elevadas potencialidades farmacológicas, " +
                "como a cera e a geleia real." +
                "\n(TEIXEIRA; VERÍSSIMO, 2015)",
        },
        {
          title: "Cera",
          text: "\t\t\tA cera é um dos produtos da colmeia, obtido pela secreção das glândulas ceríferas das abelhas obreiras com idades " +
                "entre os 12 e os 18 dias. Apresenta-se com uma cor branca, que por sua vez ao entrar em contato com o mel, torna-se " +
                "amarelo." +
                "\n(LOPES, 2014)",
        },
        {
          title: "Geleria Real",
          text: "\t\t\tA geleia real é uma secreção amarelada e cremosa, produzida pelas abelhas obreiras. É utilizado na nutrição de " +
                "larvas de abelha." +
                "\n\t\t\tÉ comumente aplicada em dietética, cosméticos, produtos farmacêuticos e alimentos saudáveis." +
                "\n(LOPES, 2014)",
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

export default MelDerivados;
