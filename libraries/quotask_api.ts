import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import ENV from "../configs/env";

export async function login(body: { email: String; password: String }) {
	try {
		const res = await axios.post(`${ENV.QUOTASK_API_HOST}/login`, body);
		// Store token in internal storage
		await AsyncStorage.setItem("TOKEN", JSON.stringify(res.data.jwt));
		return { succes: true };
	} catch (err) {
		// Status isnt in 2xx range
		if (err.response) {
			const res = err.response;
			if (res.data.message && res.status != 501) return { succes: false, ...res.data };
		}
		// Request failed for another reason
		return { succes: false, message: "Something went wrong" };
	}
}
