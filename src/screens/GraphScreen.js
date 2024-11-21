import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { db } from "../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const screenWidth = Dimensions.get("window").width;

export default function GraphScreen() {
  const [dadosHistorico, setDadosHistorico] = useState([]);

  useEffect(() => {
    const fetchDadosHistorico = async () => {
      const snapshot = await getDocs(collection(db, "historico_energia"));
      const listaHistorico = snapshot.docs.map((doc) => doc.data());

      // Filter out any data with invalid consumption values
      const validDadosHistorico = listaHistorico.filter((item) => {
        return (
          !isNaN(item.consumoTotal) &&
          item.consumoTotal !== Infinity &&
          item.consumoTotal !== -Infinity
        );
      });

      setDadosHistorico(validDadosHistorico);
    };
    fetchDadosHistorico();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Histórico de Consumo</Text>
      {dadosHistorico.length > 0 ? (
        <LineChart
          data={{
            labels: dadosHistorico.map((item) => {
              // Convert timestamp to a readable date string
              const date = new Date(item.data.seconds * 1000);
              return `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`;
            }),
            datasets: [
              {
                data: dadosHistorico.map((item) => item.consumoTotal),
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#4caf50",
            backgroundGradientTo: "#81c784",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{ marginVertical: 8 }}
        />
      ) : (
        <Text style={styles.text}>Carregando dados...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f8e9", // Light green background for a soft look
    padding: 20,
  },
  header: {
    fontSize: 28, // Slightly larger for emphasis
    fontWeight: "bold",
    color: "#2e7d32", // Deep Green for the header text
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#388e3c", // Slightly darker green for text
    fontStyle: "italic", // Adds a bit of style to the loading text
  },
});
