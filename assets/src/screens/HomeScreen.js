import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const produtos = [
  { id: 1, titulo: 'Tênis Esportivo', foto: 'https://placehold.co/600x400', descricao: 'Tênis confortável para corrida.' },
  { id: 2, titulo: 'Camisa Casual', foto: 'https://placehold.co/600x400', descricao: 'Camisa estilosa para o dia a dia.' },
  { id: 3, titulo: 'Mochila Escolar', foto: 'https://placehold.co/600x400', descricao: 'Perfeita para levar seus materiais.' },
  { id: 4, titulo: 'Relógio Digital', foto: 'https://placehold.co/600x400', descricao: 'Tecnologia e estilo no seu pulso.' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Anúncios</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {produtos.map(prod => (
          <ProductCard
            key={prod.id}
            produto={prod}
            onPress={() => navigation.navigate('Detalhes', { produto: prod })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 20, backgroundColor: '#f8f8f8' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#FF6347' },
});
