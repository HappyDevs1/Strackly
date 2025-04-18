import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { getOrganisation } from "../services/organisation";

const SettingsScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [organisation, setOrganisation] = useState<any>(null);

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        console.log("Parsed user data:", parsedUserData);
        setUser(parsedUserData);
        return parsedUserData;
      } else {
        console.log("No user data found in AsyncStorage.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return null;
    }
  }

  const getOrganisationData = async () => {
    try {
      const response = await getOrganisation(user?.organisationId)
      setOrganisation(response.data.foundOrganisation);
      console.log("Organisation data:", response.data.foundOrganisation);
      return response.data.foundOrganisation;
    } catch (error) {
      console.error("Error retrieving organisation data:", error);
    }
  }

  const settingsData = [
    { icon: "person-circle", label: "Name", value: user?.name || user?.username || "-" },
    { icon: "mail", label: "Email", value: user?.email || "-" },
    { icon: "business", label: "Organisation", value: organisation?.name || "-" },
    { icon: "call", label: "Phone", value: organisation?.phone || "-" },
    { icon: "shield-checkmark", label: "Role", value: "Master User" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await getUserData();
      } catch (error) {
        console.error("Error getting user:", error);
      }
    };
    fetchUser();
  }, []);
  
  useEffect(() => {
    const fetchOrganisation = async () => {
      if (user?.organisationId) {
        try {
          await getOrganisationData();
        } catch (error) {
          console.error("Error getting organisation:", error);
        }
      }
    };
    fetchOrganisation();
  }, [user]);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        {settingsData.map((item, index) => (
          <SettingItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const SettingItem = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => {
  return (
    <View style={styles.itemContainer}>
      <Ionicons name={icon} size={24} color="#007AFF" style={styles.icon} />
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F7F9FC",
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    shadowColor: "#007AFF",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontSize: 14,
    color: "#6C757D",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
  },
});

export default SettingsScreen;