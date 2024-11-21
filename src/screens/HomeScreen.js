import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { db } from "../services/firebaseConfig"; // Firebase
import { collection, getDocs } from "firebase/firestore"; // Firebase methods

export default function HomeScreen({ navigation }) {
  const [dadosEnergia, setDadosEnergia] = useState([]);

  useEffect(() => {
    const fetchDadosEnergia = async () => {
      const snapshot = await getDocs(collection(db, "energia_residencial"));
      const listaEnergia = snapshot.docs.map((doc) => doc.data());
      setDadosEnergia(listaEnergia);
    };
    fetchDadosEnergia();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumo de Energia</Text>

      {dadosEnergia.length > 0 ? (
        <View style={styles.summaryContainer}>
          <Text style={styles.text}>
            Consumo Diário: {dadosEnergia[0].consumo} kWh
          </Text>
          <Text style={styles.text}>
            Geração Solar: {dadosEnergia[0].geracaoSolar} kWh
          </Text>
          <Text style={styles.text}>
            Custo Estimado: R$ {dadosEnergia[0].custoEstimado}
          </Text>
        </View>
      ) : (
        <Text style={styles.text}>Carregando dados...</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Gráfico"
          onPress={() => navigation.navigate("GraphScreen")}
        />
        <Button
          title="Ir para Recomendações"
          onPress={() => navigation.navigate("RecommendationsScreen")}
        />
        <Button
          title="Ir para Controle IoT"
          onPress={() => navigation.navigate("IoTControlScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00796b",
  },
  summaryContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: "#004d40",
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
});
