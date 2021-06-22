import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class SobreNos extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Propósito",
          text: "\t\t\tAplicativo desenvolvido para divulgação científica dos benefícios do consumo de Mel e seus derivados. " +
                "Realizado através da disciplina: Trabalho Interdisciplinar Obrigatório III, ministrada pelo Prof. Dr. Fernando " +
                "Putti, na Universidade Estadual de São Paulo (UNESP), câmpus de Tupã (F.C.E. - Faculdade de Ciências e Engenharia).",
        },
        {
          title: "Equipe",
          text: "\t\t\tSob orientação do Prof. Dr. Fernando Putti, a equipe foi formada pelos seguintes discentes:\nDouglas C. " +
                "de Almeida,\nGuilherme S. Gutnik,\nLíria A. Araújo,\nMaria Luiza T. Ribeiro,\nNatália M. R. Passos.\n\t\t\tNos " +
                "próximos cards há informações adicionais sobre cada membro.",
        },
        {
          title: "Prof. Dr. Fernando",
          text: "\t\t\tProf. Dr. Fernando Putti é docente dos cursos de Administração e Engenharia de Biossistema, pela UNESP F.C.E." +
                "- Câmpus de Tupã.\nLattes:\nLinkedin:",
        },
        {
          title: "Douglas",
          text: "\t\t\tDouglas Cardozo de Almeida é discente do 9º termo do curso de Engenharia de Biossistemas, pela UNESP F.C.E. - " +
                "Câmpus de Tupã.\nLattes:\nLinkedin:",
        },
        {
          title: "Guilherme",
          text: "\t\t\tGuilherme Scioli Gutnik é discente do 9º termo do curso de Engenharia de Biossistemas, pela UNESP F.C.E. - " +
                "Câmpus de Tupã.\nLattes:\nLinkedin:",
        },
        {
          title: "Líria",
          text: "\t\t\tLíria Ariadine Araújo é discente do 9º termo do curso de Engenharia de Biossistemas, pela UNESP F.C.E. - " +
                "Câmpus de Tupã.\nLattes:\nLinkedin:",
        },
        {
          title: "Maria Luiza",
          text: "\t\t\tMaria Luiza Teodósio Ribeiro é discente do 9º termo do curso de Engenharia de Biossistemas, pela UNESP F.C.E. " +
                "- Câmpus de Tupã.\nLattes:\nLinkedin:",
        },
        {
          title: "Natália",
          text: "\t\t\tNatália Martinelli Ribeiro Passos é discente do 9º termo do curso de Engenharia de Biossistemas, pela UNESP F.C.E. " +
                "- Câmpus de Tupã.\nLattes:\nLinkedin:",
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
        <Text style={{ fontSize: 22, marginTop: 10, textAlign: "justify" }}>{item.text}</Text>
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

export default SobreNos;
