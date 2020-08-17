import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/Feather";
import { Input, Button, Card } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";

import { View } from "../components/Themed";
import Brand from "../components/Brand";

import { login } from "../../libraries/quotask_api";

export default function LoginScreen({ navigation }) {
	const { control, handleSubmit, errors, setError, setValue } = useForm();

	// We will use isLoading to animate the submit button during login
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		// Try to persist email in local storage (sqlite ect..)
		AsyncStorage.setItem("email", JSON.stringify(data.email)).catch((err) => {});
		// Login request
		login(data.email, data.password)
			.then(({ succes, message, fieldName }) => {
				if (succes) return navigation.navigate("Home");

				setError(fieldName || "password", {
					type: "manual",
					message,
				});
			})
			// 
			.finally(() => setIsLoading(false));
	};

	const getEmail = async () => {
		try {
			let email = await AsyncStorage.getItem("email");
			if (email !== null) setValue("email", JSON.parse(email));
		} catch (err) {}
	};

	// Run getEmail only once
	useEffect(() => {
		getEmail();
	}, []);

	return (
		<LinearGradient colors={["#56B4D3", "#003973"]} style={styles.viewContainer}>
			<Brand style={{ marginBottom: 20 }} />
			<Card title="Connection" containerStyle={{ width: "100%", borderRadius: 5 }} titleStyle={{ fontSize: 20 }}>
				<Controller
					name="email"
					defaultValue=""
					control={control}
					rules={{
						required: "Ce champ est requis.",
						pattern: {
							// RFC 5322 spécification
							value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: "Veuillez fournir un mail valide.",
						},
					}}
					render={({ onChange, onBlur, value }) => (
						<Input
							placeholder="Votre adresse e-mail"
							leftIcon={<Icon name="mail" size={24} color={errors.email ? "red" : "green"} />}
							errorMessage={errors.email && errors.email.message}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value.trim())}
							value={value}
						/>
					)}
				/>

				<Controller
					name="password"
					defaultValue=""
					control={control}
					rules={{ required: "Ce champ est requis." }}
					render={({ onChange, onBlur, value }) => (
						<Input
							placeholder="Votre mot de passe"
							leftIcon={<Icon name="lock" size={24} color={errors.password ? "red" : "green"} />}
							secureTextEntry={true}
							errorMessage={errors.password && errors.password.message}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value)}
							value={value}
						/>
					)}
				/>
				<View style={styles.buttonsContainer}>
					<Button
						buttonStyle={styles.button}
						title="Register"
						type="outline"
						raised
						onPress={() => {
							/* TODO Redirect navigation */
						}}
					/>

					<Button
						buttonStyle={styles.button}
						title="Login "
						type="solid"
						disabled={!!(errors.password || errors.email)}
						raised
						icon={<Icon name="check" size={20} color="white" />}
						iconRight
						onPress={handleSubmit(onSubmit)}
						loading={isLoading}
					/>
				</View>
			</Card>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 15,
	},
	buttonsContainer: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		width: 100,
		padding: 10,
	},
});
