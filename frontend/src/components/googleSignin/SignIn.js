import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Loginbymail, isLoggedIn, isAdmin } from "../../services/loginUser";
import { auth, google, facebook } from "./config";
import "../../Signin.css";

function SignIn() {
	const [isLogin, setIsLogin] = useState(false);
	const [user, setUser] = useState(null);
	const [show, setShow] = useState(false);
	const [disableOtp, setDisable] = useState(true);
	const [disableEmail, setDisableEmail] = useState(false);
	const [isOn, setIsOn] = useState(true);

	const [inpOTP, setInpOTP] = useState("");
	const navigate = useNavigate();


	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const setVal = (e) => {
		setEmail(e.target.value);
	};

	const handleOnChange = (e) => {
		setInpOTP(e.target.value);
	};

	const successAlert = () => {
		Swal.fire({
			title: "Login successfully",
			icon: "success",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inpOTP === "") {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else if (localStorage.getItem("otp") !== inpOTP) {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else {
			successAlert();
			isLoggedIn();
			isAdmin();
			navigate("/dashboard");
		}
	};

	const sendLink = async (e) => {
		e.preventDefault();
		if (email === "") {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else if (!email.includes("@")) {
			toast.warning("includes @ in your email!", {
				position: "top-center",
			});
		} else {
			Loginbymail({ email })
				.then((result) => {
					if (result.data.statusCode === 200) {
						setDisable(false);
						setDisableEmail(true);
						setIsOn(false);
						setEmail("");
						setMessage(true);

						localStorage.setItem("otp", result.data.otp);
						localStorage.setItem("token", result.data.token);

						// navigate("/emailotp");
					} else {
						toast.error("Invalid User", {
							position: "top-center",
						});
					}
				})
				.catch((err) => err);
		}
	};

	const LoginTrue = () => {
		const navigate = useNavigate();

		localStorage.setItem("token", user.token);
		if (isLoggedIn()) {
			isAdmin();
			navigate("/dashboard");
		}
	};

	const login = async (provider) => {
		const result = await signInWithPopup(auth, provider);
		setUser(result.user);
		setIsLogin(true);
	};

	return (
		<div className="App font">
			<header className="App-header">
				{isLogin && user ? (
					<LoginTrue />
				) : (
					<div>
						<h5>-or-</h5>
						<div>
							{/* <Link to="/loginEmailOtp"> */}
							<button
								type="button"
								onClick={handleShow}
								className="signin_btn"
							>
								<div className="row">
									<div className="col-sm-1">
										<i className="fa-solid fa-envelope mx-4" />
									</div>
									<div className="col">
										<p> OTP</p>
									</div>
								</div>
							</button>
							{/* </Link> */}
						</div>
						<div className="up">
							<Modal show={show} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title className="up">
										Enter your email and OTP to login
									</Modal.Title>
								</Modal.Header>
								<Modal.Body className="up">
									{message ? (
										<p
											style={{
												color: "green",
												fontWeight: "bold",
											}}
										>
											An OTP sent to your mail
										</p>
									) : (
										""
									)}
									<Form>
										<Form.Group
											className="mb-3"
											controlId="exampleForm.ControlInput1"
										>
											<Form.Control
												type="email"
												placeholder="Enter email"
												autoFocus
												disabled={disableEmail}
												value={email}
												onChange={setVal}
											/>
										</Form.Group>

										<Form.Group
											className="mb-3"
											controlId="exampleForm.ControlInput1"
										>
											<Form.Control
												type="text"
												placeholder="Enter otp"
												autoComplete="off"
												autoFocus
												disabled={disableOtp}
												value={inpOTP}
												onChange={handleOnChange}
											/>
										</Form.Group>
										<ToastContainer />
									</Form>
								</Modal.Body>
								<Modal.Footer>
									{isOn ? (
										<Button color="info" onClick={sendLink}>
											Submit
										</Button>
									) : (
										<Button
											color="info"
											// className="pop"
											onClick={handleSubmit}
										>
											Verfify
										</Button>
									)}
								</Modal.Footer>
							</Modal>
						</div>

						<button
							className="signin_btn mt-2"
							type="button"
							onClick={() => login(google)}
						>
							<div className="row">
								<div className="col-sm-1">
									<i className="social_icon fa-brands fa-google" />
								</div>

								<div className="col">
									<p>Google</p>
								</div>
							</div>
						</button>
						<br />

						<button
							className="signin_btn mt-2"
							type="button"
							onClick={() => login(facebook)}
						>
							<div className="row">
								<div className="col-sm-1">
									<i className=" social_icon fa-brands fa-facebook-f" />
								</div>
								<div className="col">
									<p>Facebook</p>
								</div>
							</div>
						</button>
					</div>
				)}
			</header>
		</div>
	);
}
export default SignIn;
