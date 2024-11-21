import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function RecommendationsScreen() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const db = getFirestore();
      const recommendationsCollection = collection(db, "recomendacoes");
      try {
        const querySnapshot = await getDocs(recommendationsCollection);
        const recomendationsData = querySnapshot.docs.map(
          (doc) => doc.data().dicas
        );
        setRecommendations(recomendationsData);
      } catch (error) {
        console.log("Error fetching recommendations: ", error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recomendações Inteligentes</Text>
      <ScrollView style={styles.dicasContainer}>
        {recommendations.length > 0 ? (
          recommendations.map((dica, index) => (
            <Text key={index} style={styles.dicaText}>
              - {dica}
            </Text>
          ))
        ) : (
          <Text style={styles.dicaText}>Carregando recomendações...</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 20,
  },
  dicasContainer: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  dicaText: {
    fontSize: 16,
    color: "#004d40",
    marginBottom: 15,
  },
});
