import React from "react";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import RightSide from "./RightSide";
import NavbarD from "./NavbarD";
// import Contact from './Contact ';
// import Myprofile from './Myprofile';
// import { Button } from 'react-bootstrap'
import { doLogout } from "../services/loginUser";

function Sidenav() {
	return (
		<>
			<NavbarD />

			<div
				style={{
					display: "flex",
					height: "100%",
					overflow: "scroll initial",
					marginTop: "",
				}}
			>
				<CDBSidebar color="dark" backgroundColor="whiteSmoke">
					<CDBSidebarHeader
						prefix={<i className="fa fa-bars fa-large text-dark" />}
					>
						<NavLink
							exact
							to="/dashboard"
							className="text-decoration-none"
							style={{ color: "black" }}
						>
							Dashboard
						</NavLink>
					</CDBSidebarHeader>

					<CDBSidebarContent
						className="text-dark"
						style={{ color: "black" }}
					>
						<CDBSidebarMenu>
							<NavLink exact to="/dashboard">
								<CDBSidebarMenuItem
									icon="columns"
									style={{ color: "black" }}
								>
									Dashboard
								</CDBSidebarMenuItem>
							</NavLink>
							{/* <NavLink exact to="/tables" >
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink> */}
							<NavLink exact to="/myprofile">
								<CDBSidebarMenuItem
									icon="user"
									style={{ color: "black" }}
								>
									Profile page
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/contact">
								<CDBSidebarMenuItem
									icon="sticky-note"
									style={{ color: "black" }}
								>
									Transaction
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/analytics">
								<CDBSidebarMenuItem
									icon="chart-line"
									style={{ color: "black" }}
								>
									Help & Support
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/">
								<CDBSidebarMenuItem
									icon="th"
									style={{ color: "black" }}
								>
									Setting
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/">
								<CDBSidebarMenuItem
									icon="th"
									style={{ color: "black" }}
								>
									Oders
								</CDBSidebarMenuItem>
							</NavLink>

							<NavLink exact to="/" onClick={() => doLogout()}>
								<CDBSidebarMenuItem
									icon="lock"
									style={{ color: "black" }}
								>
									logout
								</CDBSidebarMenuItem>
							</NavLink>
							{/* <Button color="inherit" onClick={()=> doLogout()}>Logout</Button>  */}

							{/* <NavLink exact to="/hero404" target="_blank" >
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink> */}
						</CDBSidebarMenu>
					</CDBSidebarContent>

					<CDBSidebarFooter
						style={{ textAlign: "center", color: "black" }}
					>
						<div
							style={{
								padding: "20px",
								paddingTop: "0px",
								marginBottom: "0px",
								marginTop: "400px",
								font: "10px",
							}}
						>
							© Copyright{" "}
							<span style={{ color: "black" }}>Neo</span>
							<span style={{ color: "red" }}>TRADE</span>
						</div>
					</CDBSidebarFooter>
				</CDBSidebar>

				<RightSide />
				{/* <Contact/> */}
				{/* <Myprofile/> */}
			</div>
		</>
	);
}

export default Sidenav;
