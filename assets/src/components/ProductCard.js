import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ produto, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: produto.foto }} style={styles.image} />
      <Text style={styles.title}>{produto.titulo}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    padding: 10,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center'
  },
  image: { width: 120, height: 120, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  button: { backgroundColor: '#FF6347', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
