import React from "react";
// Component to Make sure we arent on the device bar, notches ect..
import { SafeAreaProvider } from "react-native-safe-area-context";

import LoginScreen from "./UI/screens/Login";

export default function App() {
	return (
		<SafeAreaProvider>
			<LoginScreen />
		</SafeAreaProvider>
	);
}
