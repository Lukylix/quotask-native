import React from "react";
import { StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { Input, Button } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";

import { View, Text } from "../components/Themed";

export default function LoginScreen() {
	const { control, handleSubmit, errors } = useForm();
	// TODO send login request
	const onSubmit = (data) => console.log(data);

	return (
		<View style={styles.container}>
			<Controller
				name="email"
				defaultValue=""
				control={control}
				rules={{
					required: "Ce champ est requis.",
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
					containerStyle={{ marginRight: 30 }}
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
					disabled={errors.password || errors.email || false}
					raised
					icon={<Icon name="check" size={20} color="white" />}
					iconRight
					onPress={handleSubmit(onSubmit)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonsContainer: {
		marginTop: 40,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		width: 100,
		padding: 10,
	},
});
