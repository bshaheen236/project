import axios from "axios";

const API = "http://localhost:3002/api/contact";

export default function getContact(data) {
	return axios.post(`${API}/info`, data);
}

export { getContact };
