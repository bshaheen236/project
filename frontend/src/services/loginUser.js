import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:3002/api/user/";

function getUsers() {
	return axios.get(`${API_URL}getuser`);
}
function addLoginUser(id, data) {
	return axios.post(`${API_URL}edituser/${id}`, data);
}
function getUserById(id) {
	return axios.get(`${API_URL}getuserbyid/${id}`);
}

// login
function signin(data) {
	return axios.post(`${API_URL}signin`, data, { validateStatus: false });
}

// register
function signup(data) {
	// console.log(data);
	return axios.post(`${API_URL}signup`, data);
}
function isLoggedIn() {
	const data = localStorage.getItem("token");
	if (!data) {
		return false;
	}
	return true;
}

function getToken() {
	return localStorage.getItem("token");
}
function getUser() {
	try {
		return jwtDecode(localStorage.getItem("token"));
	} catch (e) {
		return null;
	}
}
function isAdmin() {
	return !getUser() ? false : getUser().isAdmin;
}
function doLogout() {
	localStorage.removeItem("token");
	window.location = "/";
}

function sendPasswordLink(email) {
	// console.log(email);
	return axios.post(`${API_URL}sendpasswordlink`, email);
}

function forgotPassword(id, token) {
	return axios.get(`${API_URL}forgotpassword/${id}/${token}`);
}

function idToken(data) {
	// console.log(data, "line 64");

	return axios.post(
		`${API_URL}changepassword/${data.id}/${data.token}/${data.password}`
	);
}

function Loginbymail(data) {
	return axios.post(`${API_URL}loginbymail`, data);
}
function varifyOtp(otp) {
	console.log("kya h ye",otp);
	return axios.post(`${API_URL}varifyotp`,otp);
}

export {
	getUsers,
	addLoginUser,
	getUserById,
	isLoggedIn,
	getToken,
	isAdmin,
	doLogout,
	signup,
	signin,
	sendPasswordLink,
	forgotPassword,
	idToken,
	Loginbymail,
	varifyOtp
};
