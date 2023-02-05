import axios from "axios";

const API = "http://localhost:3002/api/macanism";

function viewGold(id) {
	return axios.get(`${API}/viewgold/${id}`);
}

function viewSilver(id) {
	return axios.get(`${API}/viewsilver/${id}`);
}

function sellGold(id,data) {
	return axios.post(`${API}/sellgold/${id}`,data);
}
function sellSilver(id) {
	return axios.post(`${API}/sellsilver/${id}`);
}

function buyGold(id) {
	return axios.post(`${API}/buygold/${id}`);
}
function buySilver(id) {
	return axios.post(`${API}/buysilver/${id}`);
}

export {
	viewGold,
    viewSilver,
    sellGold,
    sellSilver,
    buyGold,
    buySilver
};
