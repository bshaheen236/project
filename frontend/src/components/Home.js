import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import {
// 	getGoldDataByMonthID,
// 	getSilverDataByMonthID,
// } from "../services/trade.api";
import GoldChart from "./GoldChart";
import SilverChart from "./SilverChart";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {

	// useEffect(() => {
	// 	getGoldDataByMonthID(new Date().getMonth())
	// 		.then((result) => {
	// 			setGoldPrice(result.data.data[new Date().getDate() + 1].price);
	// 			console.log(result.data.data[new Date().getDate() + 1]);
	// 		})
	// 		.catch((err) => err);

	// 	getSilverDataByMonthID(new Date().getMonth())
	// 		.then((result) => {
	// 			setSilverPrice(
	// 				result.data.data[new Date().getDate() + 1].price
	// 			);
	// 			console.log(result.data.data[new Date().getDate() + 1]);
	// 		})
	// 		.catch((err) => err);
	// }, []);

	return (
		<div>
			<Navbar />

			<div
				style={{
					marginLeft: "60px",
					marginTop: "40px",
					marginBottom: "100px",
				}}
			>
				<Tabs
					defaultActiveKey="gold"
					id="uncontrolled-tab-example"
					className="mb-3 nav nav-tabs nav-fill"
				>
					<Tab eventKey="gold" title="Gold">
						<GoldChart />
					</Tab>
					<Tab eventKey="silver" title="Silver">
						{/* <div className="col-md-6 "> */}
						<SilverChart />
						{/* <img style={{ width: "100%" }} src="./Images/silver.png" /> */}
					</Tab>
				</Tabs>
				<br />
			</div>
			<div className="row ms-2" style={{ color: "red" }}>
				<div className="col-sm-1" />
				<div className="col-4 ">
					<img src="images/40.png" alt="img" />
				</div>
				<div className="col-6 text-danger">
					<h1>
						{" "}
						Get access to the safest way of procuring{" "}
						<span style={{ color: "#DAA520	" }}>Gold </span> /{" "}
						<span style={{ color: "#C0C0C0" }}>Silver</span>
					</h1>
					<h5 className="text-black">
						{" "}
						<p className="mb-5 mt-4">
							We at DigiGold want to make your gold journey
							simple, transparent and trustworthy so that you can
							get the optimum output of your savings.
						</p>
					</h5>
					<div className="row">
						<div className="col-sm-3 d-flex justify-content-center">
							<Card
								style={{
									height: "190px",
									width: "38rem",
									padding: "20px",
									textAlign: "center",
									"box-shadow":
										" 0 4px 8px 0 rgba(0,0,0,0.2)",
								}}
								className="stepCard"
							>
								<Card.Img
									variant="top"
									src="images/50.png"
									style={{ height: "100px", width: "140px" }}
								/>
								<Card.Body>
									<Card.Title>Step 1</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className="col-sm-3 d-flex justify-content-center">
							<Card
								style={{
									height: "190px",
									width: "38rem",
									textAlign: "center",
									padding: "20px",
									"box-shadow":
										" 0 4px 8px 0 rgba(0,0,0,0.2)",
								}}
								className="stepCard"
							>
								<Card.Img
									variant="top"
									src="images/Kyc1.png"
									style={{ height: "100px" }}
								/>
								<Card.Body>
									<Card.Title>Step 2</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className="col-sm-3 d-flex justify-content-center">
							<Card
								style={{
									height: "190px",
									textAlign: "center",
									width: "38rem",
									padding: "20px",
									"box-shadow":
										" 0 4px 8px 0 rgba(0,0,0,0.2)",
								}}
								className="stepCard mb-2"
							>
								<Card.Img variant="top" src="images/51.png" />
								<Card.Body>
									<Card.Title>Step 3</Card.Title>
								</Card.Body>
							</Card>
						</div>

						<div className="col-sm-3 d-flex justify-content-center">
							<Card
								style={{
									height: "190px",
									width: "18rem",
									textAlign: "center",
									padding: "20px",
									"box-shadow":
										" 0 4px 8px 0 rgba(0,0,0,0.2)",
								}}
								className="stepCard mb-2"
							>
								<Card.Img variant="top" src="images/52.png" />
								<Card.Body>
									<Card.Title>Step 4</Card.Title>
								</Card.Body>
							</Card>
						</div>
						<div className="mt-5" style={{ textAlign: "center" }}>
							<Button
								variant="outline-danger"
								className="square border border-dark "
							>
								<Nav.Link as={Link} to="/signup">
									Join Us !{" "}
								</Nav.Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='py-5 mt-4 container' style={{ textAlign: "center" }}>
				{/* {/ <img src="images/pay.png" /> /} */}
				<h1>Trust and Support of</h1>
				<marquee width="100%" direction="right" height="170px" scrollamount="12">
					<img src="images/53.png" alt="img" />
					<img src="images/54.png" alt="img" /><img src="images/55.png"  alt="img"/><img src="images/56.png"  alt="img"/>
					<img src="images/58.png" alt="img" /><img src="images/57.png" alt="img" />

				</marquee>
			</div>
			<Footer />
		</div>
	);
}
