import React, { useState, useEffect } from "react";
import "../RightSide.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
} from "@chakra-ui/react";
import GoldChart from "./GoldChart";
import SilverChart from "./SilverChart";
import {
	getGoldDataByMonthID,
	getSilverDataByMonthID,
} from "../services/trade.api";
// import { slide as Menu } from "react-burger-menu";
// import { AiFillHome, AiFillInfoCircle, AiFillMail, AiFillSetting } from "react-icons/ai";
// import { IconName } from "react-icons/aiFill";

export default function RightSide() {
	const [goldPrice, setGoldPrice] = useState(0);
	const [silverPrice, setSilverPrice] = useState(0);

	useEffect(() => {
		getGoldDataByMonthID(new Date().getMonth())
			.then((result) => {
				setGoldPrice(result.data.data[new Date().getDate() + 1].price);
				// console.log(result.data.data[new Date().getDate() + 1]);
			})
			.catch((err) => err);

		getSilverDataByMonthID(new Date().getMonth())
			.then((result) => {
				setSilverPrice(
					result.data.data[new Date().getDate() + 1].price
				);
				// console.log(result.data.data[new Date().getDate() + 1]);
			})
			.catch((err) => err);
	}, []);

	return (
		<>
			<div className="container " style={{ marginTop: "105px" }}>
				<div style={{ marginLeft: "60px", marginTop: "2px" }}>
					<Tabs
						defaultActiveKey="gold"
						id="uncontrolled-tab-example"
						className="mb-3"
					>
						{/* gold part */}
						<Tab eventKey="gold" title="Gold">
							<h1> Gold Price Today-</h1>
							<h3
								style={{
									backgroundColor: "#fad776",
									width: "150px",
								}}
							>
								{" "}
								&#x20b9; {goldPrice}
							</h3>
							<br />
							<StatGroup className="col-sm-5">
								<Stat>
									<StatLabel>Sent</StatLabel>
									<StatNumber>345,670</StatNumber>
									<StatHelpText style={{ color: "green" }}>
										<StatArrow type="increase" />
										23.36%
									</StatHelpText>
								</Stat>

								<Stat>
									<StatLabel>Clicked</StatLabel>
									<StatNumber>45</StatNumber>
									<StatHelpText style={{ color: "red" }}>
										<StatArrow type="decrease" />
										9.05%
									</StatHelpText>
								</Stat>
							</StatGroup>

							<GoldChart />
						</Tab>

						{/* silver part */}
						<Tab eventKey="silver" title="Silver">
							<h1>Silver Price Today -</h1>{" "}
							<h3
								style={{
									backgroundColor: "#fad776",
									width: "150px",
								}}
							>
								{" "}
								&#x20b9;
								{silverPrice}
							</h3>
							<br />
							<StatGroup className="col-sm-5">
								<Stat>
									<StatLabel>Sent</StatLabel>
									<StatNumber>145,670</StatNumber>
									<StatHelpText style={{ color: "green" }}>
										<StatArrow type="increase" />
										2.36%
									</StatHelpText>
								</Stat>

								<Stat>
									<StatLabel>Clicked</StatLabel>
									<StatNumber>35</StatNumber>
									<StatHelpText style={{ color: "red" }}>
										<StatArrow type="decrease" />
										9.05%
									</StatHelpText>
								</Stat>
							</StatGroup>
							<SilverChart />
							{/* <img style={{ width: "100%" }} src='./Images/silver.png' /> */}
						</Tab>
					</Tabs>
				</div>
			</div>

			{/* <nav
				className="navv"
				id="sidebar"
				style={{
					fontSize: "14px",
					lineHeight: "1.8",
					color: "gray",
					textDecoration: "none",
				}}
			>
				<div className="p-4" style={{ marginTop: "70px" }}>
					<h5>sell and purches </h5>
					<div style={{ marginLeft: "", marginTop: "20px" }}>
						<Tabs
							defaultActiveKey="Sell"
							id="uncontrolled-tab-example"
							className="mb-3"
						>
							<Tab eventKey="Sell" title="Sell">
								<h1> Sell Price Today-</h1>
							</Tab>
							<Tab eventKey="Purches" title="Purches">
								<h1>Purches Price Today -</h1>
							</Tab>
						</Tabs>
					</div>
				</div>
			</nav> */}
		</>
	);
}
