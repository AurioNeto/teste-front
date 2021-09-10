import { APP_API } from "./constant";
import axios from "axios"

export async function getStart(email: string) {
	return await axios.get(`${APP_API}/start/${email}`)
}

