import axios from "axios";

const API = "http://localhost:3002/api/trade";

function getGoldData() {
	return axios.get(`${API}/get-gold-data`);
}

function getSilverData() {
	return axios.get(`${API}/get-silver-data`);
}

function getGoldDataByMonthID(id) {
	return axios.get(`${API}/get-gold-data-by-day/${id}`);
}

function getSilverDataByMonthID(id) {
	return axios.get(`${API}/get-silver-data-by-day/${id}`);
}

export {
	getGoldData,
	getSilverData,
	getGoldDataByMonthID,
	getSilverDataByMonthID,
};
