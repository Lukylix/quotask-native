import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Text } from "../components/Themed";

export default function HomeScreen() {
	const [jwt, setJwt] = useState("");

	const getToken = async () => {
		try {
			let jwt = await AsyncStorage.getItem("TOKEN");
			if (jwt !== null) setJwt(jwt);
		} catch (err) {}
	};

	useEffect(() => {
		getToken();
	}, []);

	return (
		<View style={styles.viewContainer}>
			<Text>Home Screen</Text>
			<Text>{jwt}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 15,
	},
});
