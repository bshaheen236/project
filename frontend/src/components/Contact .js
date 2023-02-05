import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { getContact } from "../services/contact.api";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const regForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regPhone = /^[6-9]\d{8}$/;

function loginHandle(e) {
	e.preventDefault();
}

export default function Contact() {
	const [fullname, setFullname] = useState("");
	const [pnum, setpnum] = useState("");
	const [email, setemail] = useState("");
	const [msg, setMsg] = useState("");
	const [errors, setErrors] = useState({
		fullname: false,
		pnum: false,
		email: false,
		msg: false,
	});

	const form = useRef();

	const success = (data) =>
		toast.success(data, { position: toast.POSITION.TOP_CENTER });
	const failure = (data) =>
		toast.error(data, { position: toast.POSITION.TOP_CENTER });

	const sendMsg = (e) => {
		e.preventDefault();

		if (errors.fullname && errors.pnum && email !== "" && msg !== "") {
			const data = {
				fullName: fullname,
				phone: pnum,
				email,
				message: msg,
			};

			getContact(data)
				.then((res) => {
					if (res.data.statusCode === 200) {
						emailjs
							.sendForm(
								"service_7agrfzd",
								"template_8ueaflm",
								form.current,
								"t0C36NteblDUpVhvX"
							)
							.then(
								(res) => {
									// console.log(result.text);
									success(res.data.msg);
								},
								(error) => error
							);
					}
				})
				.catch((res) => res.data.err);
		} else {
			failure("Please Enter Valid Details !!");
		}
	};

	return (
		<>
			<Navbar />
			<div className="mb-5">
				<ToastContainer />
				<section className="py-4 bg-info">
					<div className="container">
						<div className="row">
							<div className="col-md-4 myp-auto">
								<h2> Contact Us </h2>
							</div>
							<div className="col-md-8 my-auto" />
						</div>
					</div>
				</section>

				<section>
					<div className="container mt-4">
						<div className="row">
							<div className="col-md-12 myp-auto">
								<h5>
									We Are Processing Your Message And Our
									Consultants Shall Reach Out To You In 48
									Working Hours :{" "}
								</h5>
							</div>
							<div className="col-md-8 my-auto" />
						</div>
					</div>
				</section>

				<form ref={form}>
					<section className="section">
						<div className="container">
							<div className="card-shadow">
								<div className="card-body">
									<form onSubmit={loginHandle}>
										<div className="row">
											<div className="col-md-6 border-right bg-light">
												<h2> Contact Form </h2>
												<hr />

												<div className="form-group">
													<label className="md-1">
														{" "}
														Full Name
													</label>
													<input
														className="form-control"
														type="text"
														maxLength={30}
														placeholder="Enter your name"
														name="from_name"
														onChange={(event) => {
															setFullname(
																event.target
																	.value
															);
															regName.test(
																fullname
															)
																? setErrors({
																		...errors,
																		fullname: true,
																  })
																: setErrors({
																		...errors,
																		fullname: false,
																  });
														}}
														required
													/>
													{fullname !== "" &&
														!regName.test(
															fullname
														) && (
															<span className="text-danger">
																{" "}
																Please Enter
																Valid Name{" "}
															</span>
														)}
												</div>

												<div className="form-group">
													<label className="mb-1">
														{" "}
														Phone Number{" "}
													</label>
													<input
														className="form-control"
														type="text"
														maxLength="11"
														placeholder="Enter Your Phone Number"
														name="from_number"
														onChange={(event) => {
															setpnum(
																event.target
																	.value
															);
															regPhone.test(pnum)
																? setErrors({
																		...errors,
																		pnum: true,
																  })
																: setErrors({
																		...errors,
																		pnum: false,
																  });
														}}
														required
													/>
													{pnum !== "" &&
														!regPhone.test(pnum) &&
														pnum.length < 9 && (
															<span className="text-danger">
																{" "}
																Phone Number
																Must Be At Least
																10 Numbers{" "}
															</span>
														)}
												</div>

												<div className="form-group">
													<label className="mb-1">
														{" "}
														Email Address{" "}
													</label>
													<input
														className="form-control"
														type="email"
														placeholder="Enter Your Email Adress"
														name="from_email"
														onChange={(event) => {
															setemail(
																event.target
																	.value
															);
														}}
														required
													/>
													{email !== "" &&
														!regForEmail.test(
															email
														) && (
															<span className="text-danger">
																{" "}
																Please Enter
																valid E-mail id{" "}
															</span>
														)}
												</div>

												<div className="form-group">
													<label className="mb-1">
														{" "}
														Message{" "}
													</label>
													<textarea
														rows="3"
														className="form-control"
														minLength={10}
														maxLength={100}
														placeholder="Type Your Message..."
														name="message"
														onChange={(event) => {
															setMsg(
																event.target
																	.value
															);
														}}
														required
													>
														{" "}
													</textarea>
												</div>

												<div className="form-group py-3">
													<button
														type="submit"
														value="Send"
														className="btn btn-success shadow w-100"
														onClick={sendMsg}
													>
														{" "}
														Send Message{" "}
													</button>
												</div>
											</div>

											<div className="col-md-6 border-start">
												<h5 className="main-heading">
													{" "}
													Address Information :
												</h5>
												<div className="underline">
													<p>Pune Hinjewadi</p>

													<p>Phone no : 7896571467</p>

													<p>
														E-mail :
														mailto:neotrade@example.com
													</p>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</form>
			</div>
		</>
	);
}
