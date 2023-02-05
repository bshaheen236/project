import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { forgotPassword, idToken } from "../services/loginUser";
import Navbar from "./Navbar";
// import Dashboard from './Dashboard';

function Forgotpass() {
	const { id, token } = useParams();
	const history = useNavigate();
	// const [data2, setData] = useState(false);
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const userValid = async () => {
		// const res = await fetch(`/forgotpassword/${id}/${token}`, {
		//     method: "GET",
		//     headers: {
		//         "Content-Type": "application/json"
		//     }
		// });

		// const res = await forgetpass
		// api
		// console.log("ye h password",password)
		forgotPassword(id, token)
			.then((result) => {
				if (result.status === 201) {
					// console.log("user valid")
				} else {
					history("*");
				}
			})
			.catch((err) => err);

		// const data = await res.json()

		// if (result.status == 201) {
		//     console.log("user valid")
		// } else {
		//     history("*")
		// }
	};

	const setval = (e) => {
		setPassword(e.target.value);
	};

	const sendpassword = async (e) => {
		e.preventDefault();

		if (password === "") {
			toast.error("password is required!", {
				position: "top-center",
			});
		} else if (password.length < 6) {
			toast.error("password must be 6 char!", {
				position: "top-center",
			});
		} else {
			// const res = await fetch(`/${id}/${token}`, {
			//     method: "POST",
			//     headers: {
			//         "Content-Type": "application/json"
			//     },
			//     body: JSON.stringify({ password })
			// });

			// api
			await idToken({ id, token, password })
				.then((result) => {
					// console.log('done....................');
					if (result.status === 201) {
						setPassword("");
						setMessage(true);
					} else {
						toast.error("! Token Expired generate new LInk", {
							position: "top-center",
						});
					}
				})
				.catch((err) => err);

			// const data = await res.json()

			// if (data.status == 201) {
			//     setPassword("")
			//     setMessage(true)
			// } else {
			//     toast.error("! Token Expired generate new LInk", {
			//         position: "top-center"
			//     })
			// }
		}
	};
	useEffect(() => {
		userValid();
		setTimeout(() => {
			// setData(true)
		}, 3000);
	}, []);

	return (
		<div>
			<Navbar />
			<div
				className="container-fluid pt-5 "
				style={{ marginTop: "50px" }}
			>
				<div
					className="row mx-4"
					style={{ marginTop: "40px", marginBottom: "30px" }}
				>
					<div className=" clr " style={{ textAlign: "center" }}>
						<div
							className="login text-dark"
							style={{ backgroundColor: "whiteSmoke" }}
						>
							<h2 className="mb-3 text-primary">
								{" "}
								Set New Password
							</h2>

							<p style={{ fontSize: "12px" }}>
								Please enter your New Password
							</p>
							{message ? (
								<p
									style={{
										color: "green",
										fontWeight: "bold",
									}}
								>
									password successfully update
								</p>
							) : (
								""
							)}
							<Form
								style={{ marginLeft: "20px" }}
								autocomplete="off"
							>
								<Form.Group
									className="mb-3"
									controlId="formBasicpassword"
								>
									<Form.Label>New password</Form.Label>
									<Form.Control
										className="border border-secondary"
										type="password"
										placeholder="Enter password"
										name="password"
										value={password}
										onChange={setval}
									/>
								</Form.Group>

								<Button
									className="bg-primary mt-2 w-50"
									type="button"
									href="/"
									onClick={sendpassword}
								>
									Send
								</Button>
							</Form>
							<ToastContainer />
							<div
								className="row pt-3"
								style={{ marginBottom: "20px" }}
							>
								<div
									className="col-sm-5"
									style={{ textAlign: "right" }}
								>
									<span>
										<a href="/login">
											Click here to login 👈
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Forgotpass;
