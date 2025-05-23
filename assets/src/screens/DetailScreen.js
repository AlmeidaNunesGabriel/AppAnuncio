import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.foto }} style={styles.image} />
      <Text style={styles.title}>{produto.titulo}</Text>
      <Text style={styles.description}>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  image: { width: 250, height: 250, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  description: { fontSize: 16, textAlign: 'center', color: '#555' },
});
