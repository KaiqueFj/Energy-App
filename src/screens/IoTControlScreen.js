import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { db } from "../services/firebaseConfig"; // Assuming firebaseConfig is set up correctly
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods

export default function IoTControlScreen() {
  const [controleIot, setControleIot] = useState([]); // State to hold fetched data
  const [deviceStates, setDeviceStates] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "controle_iot"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data()); // Assuming your Firestore documents are structured correctly
      });
      setControleIot(data);

      // Initialize the deviceStates based on fetched data
      const initialDeviceStates = {};
      data.forEach((group) => {
        group.dispositivos.forEach((device) => {
          initialDeviceStates[device.nome] = device.status === "Ligado"; // Initialize to true/false based on the status
        });
      });
      setDeviceStates(initialDeviceStates);
    };

    fetchData();
  }, []);

  // Handle the switch toggling
  const toggleSwitch = (deviceName) => {
    setDeviceStates((prevState) => ({
      ...prevState,
      [deviceName]: !prevState[deviceName],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Controle de Dispositivos</Text>
      <ScrollView style={styles.deviceList}>
        {controleIot.map((group) => (
          <View key={group.id} style={styles.deviceGroup}>
            {group.dispositivos.map((device) => (
              <View key={device.nome} style={styles.deviceContainer}>
                <Text style={styles.deviceName}>{device.nome}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={deviceStates[device.nome] ? "#f5dd4b" : "#f4f3f4"}
                  onValueChange={() => toggleSwitch(device.nome)}
                  value={deviceStates[device.nome]}
                />
              </View>
            ))}
          </View>
        ))}
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
  deviceList: {
    marginTop: 10,
  },
  deviceGroup: {
    marginBottom: 20,
  },
  deviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  deviceName: {
    fontSize: 18,
    color: "#004d40",
  },
});
