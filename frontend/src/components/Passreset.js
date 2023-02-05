import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { sendPasswordLink } from "../services/loginUser";
import Navbar from "./Navbar";

function Passreset() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const setVal = (e) => {
		setEmail(e.target.value);
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
			sendPasswordLink({ email })
				.then((result) => {
					if (result.data.status === 201) {
						setEmail("");
						setMessage(true);
					} else {
						toast.error("Invalid User", {
							position: "top-center",
						});
					}
				})
				.catch((err) => err);

			// await sendPasswordLink(email)
			//     .then(result => {
			//         if (result.data.status == 201) {
			//             setEmail("");
			//             setMessage(true)
			//         } else {
			//             toast.error("Invalid User", {
			//                 position: "top-center"
			//             })
			//         }
			//     }).catch(err => {
			//         console.log(err);
			//     })

			// const data = await res.json();
		}
	};

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
								Reset Password{" "}
							</h2>

							<p style={{ fontSize: "12px" }}>
								Please enter your email address to reset your
								password
							</p>
							{message ? (
								<p
									style={{
										color: "green",
										fontWeight: "bold",
									}}
								>
									pasword reset link send Succsfully in Your
									Email
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
									controlId="formBasicEmail"
								>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										className="border border-secondary"
										type="email"
										placeholder="Enter email"
										name="email"
										value={email}
										onChange={setVal}
									/>
								</Form.Group>

								<Button
									className="bg-primary mt-2 w-50"
									type="button"
									href="/"
									onClick={sendLink}
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
export default Passreset;
