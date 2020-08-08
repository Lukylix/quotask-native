import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// Types
import { TextStyle, ViewProps } from "react-native";
type BrandProps = { iconSize?: number; textStyle?: TextStyle } & ViewProps;

export default function Brand(props: BrandProps) {
	const { style, textStyle, iconSize, ...otherProps } = props;

	return (
		<View style={[{ ...styles.container }, style]} {...otherProps}>
			<Icon
				name="check-circle"
				size={iconSize || 40}
				color="#2EB398"
				style={{ transform: [{ rotate: "90deg" }] }}
			/>
			<Text style={{ ...styles.brandText, ...textStyle }}>uoTask</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "transparent",
	},
	brandText: {
		fontSize: 30,
		fontWeight: "900",
		color: "white",
	},
});
