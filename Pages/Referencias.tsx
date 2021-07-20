import React from "react";
import { StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class Referencias extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          text1: "ESCOBAR, 2013.",
          url1: "http://34.233.57.254/index.php/uninga/article/view/1115",
          text2: "KUREK-GÓRECKA et al., 2020",
          url2: "https://www.mdpi.com/1420-3049/25/3/556",
          text3: "LOPES, 2014.",
          url3: "https://bibliotecadigital.ipb.pt/handle/10198/11427",
          text4: "MARTINS, 2016.",
          url4: "https://www.conap.coop.br/2016/09/23/apicultura-e-agricultura-sustentavel/",
          text5: "RIBEIRO et al, 2009.",
          url5: "http://www.scielo.mec.pt/scielo.php?script=sci_arttext&pid=S0871-018X2009000200010&lng=pt&nrm=iso",
          text6: "SARETTA; BRANDÃO, 2021.",
          url6: "https://bwsjournal.emnuvens.com.br/bwsj/article/view/169",
        },
        {
          text1: "TEIXEIRA; VERÍSSIMO, 2015.",
          url1: "https://pesquisa.bvsalud.org/portal/resource/pt/vti-13353",
          text2: "ZAMBERLAN; SANTOS, 2010.",
          url2: "https://www.bage.ideau.com.br/wp-content/files_mf/4d4d0fc34b02f107358a0ce5f14dfc0b87_1.pdf",
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
        <TouchableOpacity onPress={() => Linking.openURL(item.url1)}>
          <Text style={{ fontSize: 25, textAlign: "left", color: 'rgb(153, 36, 9)', marginTop: 50 }}>{item.text1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(item.url2)}>
          <Text style={{ fontSize: 25, textAlign: "left", color: 'rgb(153, 36, 9)', marginTop: 10 }}>{item.text2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(item.url3)}>
          <Text style={{ fontSize: 25, textAlign: "left", color: 'rgb(153, 36, 9)', marginTop: 10 }}>{item.text3}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(item.url4)}>
          <Text style={{ fontSize: 25, textAlign: "left", color: 'rgb(153, 36, 9)', marginTop: 10 }}>{item.text4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(item.url5)}>
          <Text style={{ fontSize: 25, textAlign: "left", color: 'rgb(153, 36, 9)', marginTop: 10 }}>{item.text5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(item.url6)}>
          <Text style={{ fontSize: 25, textAlign: "left", color: 'rgb(153, 36, 9)', marginTop: 10 }}>{item.text6}</Text>
        </TouchableOpacity>
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

