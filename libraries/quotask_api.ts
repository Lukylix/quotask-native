import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import ENV from "../configs/env";

export async function login(email: String, password: String) {
	try {
		const res = await axios.post(`${ENV.QUOTASK_API_HOST}/login`, { email, password });
		// Store token in internal storage
		await AsyncStorage.setItem("TOKEN", res.data.jwt);
		return { succes: true };
	} catch (err) {
		const res = err.response;
		// Status isnt in 2xx range
		if (res && res.data.message && res.status != 501) {
			if (res.status == 401) return { succes: false, message: "Check your password", fieldName: "password" };
			if (res.status == 404) return { succes: false, message: "Email not found", fieldName: "email" };
			return { succes: false, ...res.data };
		}
		// Request failed for another reason
		return { succes: false, message: "Something went wrong" };
	}
}
