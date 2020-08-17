import React from "react";
// Component to Make sure we arent on the device bar, notches ect..
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation  from "./UI/navigation/Navigation";

export default function App() {
	return (
		<SafeAreaProvider>
			<Navigation />
		</SafeAreaProvider>
	);
}
