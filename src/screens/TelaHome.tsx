import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryIcons from '../components/CategoryIcons';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    TelaHome: undefined;
    TelaPesquisa1: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const TelaHome: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('TelaPesquisa1')}>
          <SearchBar />
        </TouchableOpacity>

        <CategoryIcons />

        <SectionHeader title="Mais procurados" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <ProductCard 
            image="https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/pao-1.png" 
            price="R$4,49" 
            name="Pão de forma Baud.." 
            onMoreInfo={() => { console.log('Ver mais - Pão de forma') }} 
          />
          <ProductCard 
            image="https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/molico-1.png" 
            price="R$17,65" 
            name="Molico Composta Leite.." 
            onMoreInfo={() => { console.log('Ver mais - Molico') }} 
          />
          <ProductCard 
            image="https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/downy-1.png" 
            price="R$41,30" 
            name="Downy Brisa Suave.." 
            onMoreInfo={() => { console.log('Ver mais - Downy') }} 
          />
          <ProductCard 
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVy1_gH4hF4KjLPyPVZPBRXAJ1GLR0fT47yiWjmU7cHx2tNZs6xEbFbkgGiEkBAvtDJfJcE9gHWmxoUK2zTzRM9EyoN7ZqJfF7fYcPRNKIwb-HojChafKl7T0CvXvW7ANbVExpfQ&usqp=CAc" 
            price="R$9,99" 
            name="Colgate Classic.." 
            onMoreInfo={() => { console.log('Ver mais - Colgate') }} 
          />
        </ScrollView>

        <SectionHeader title="Ofertas do dia" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <ProductCard 
            image="https://hiperideal.vtexassets.com/arquivos/ids/231364/7894904254972-FiledesalmaoempedacosSearaPescadosIQF500g-1.jpg?v=638853332309500000" 
            price="R$29,90" 
            name="Filé de Salmão em.." 
            onMoreInfo={() => { console.log('Ver mais - Salmão') }} 
          />
          <ProductCard 
            image="https://m.media-amazon.com/images/I/61g1weQXwbL.jpg" 
            price="R$11,99" 
            name="Caixa de Variedade.." 
            onMoreInfo={() => { console.log('Ver mais - Caixa variedade') }} 
          />
          <ProductCard 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34JK13gWUNLGTRmcZQcnjUHqtnwzQdiAyEA&s" 
            price="R$22,14" 
            name="Contra Filé em.." 
            onMoreInfo={() => { console.log('Ver mais - Contra filé') }} 
          />
        </ScrollView>

        <SectionHeader title="Destaque Semanal" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <ProductCard 
            image="https://mercafefaststore.vtexassets.com/arquivos/ids/554739/3C-TORRADO-MOIDO-TRADICIONAL.png?v=638666755937630000" 
            price="R$14,99" 
            name="3 corações café.." 
            onMoreInfo={() => { console.log('Ver mais - Café 3 corações') }} 
          />
          <ProductCard 
            image="https://redemix.vteximg.com.br/arquivos/ids/214122-1000-1000/8076800195033.jpg?v=638350624801500000" 
            price="R$5,99" 
            name="Barilla N.3 - Spaghetti.." 
            onMoreInfo={() => { console.log('Ver mais - Barilla') }} 
          />
          <ProductCard 
            image="https://carrefourbrfood.vtexassets.com/arquivos/ids/192242523/cerveja-heineken-garrafa-600ml-1.jpg?v=638830130020600000" 
            price="R$50,89" 
            name="Heineken Cerveja.." 
            onMoreInfo={() => { console.log('Ver mais - Heineken') }} 
          />
        </ScrollView>

      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 96, 
  },
  horizontalScroll: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});

export default TelaHome;
