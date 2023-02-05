import axios from "axios";

const API_URL = "http://localhost:3002/api/user/";

function addUser(data) {
	return axios.post(`${API_URL}signup`, data);
}
function getUsers() {
	return axios.get(`${API_URL}getuser`);
}
function editUser(id, data) {
	return axios.put(`${API_URL}edituser/${id}`, data);
}
function deleteUser(id) {
	return axios.delete(`${API_URL}deleteuser/${id}`);
}
function getUserById(id) {
	return axios.get(`${API_URL}getuserbyid/${id}`);
}
export { addUser, getUsers, editUser, deleteUser, getUserById };
