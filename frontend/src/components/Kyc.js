// import React, { useState } from 'react'
// import { Card, Col, Row } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import NavbarD from './NavbarD';

// const regForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// function loginHandle(e) {
//   alert("hi")
//   e.preventDefault()
// }
// export default function Kyc() {
//   const [fname, setFname] = useState("");
//   const [lname, setlname] = useState("");
//   const [sname, setsname] = useState("");
//   const [pnum, setpnum] = useState("");
//   const [email, setemail] = useState("");
//   const [gender, setgender] = useState("");
//   const [address, setaddress] = useState("");
//   const [city, setcity] = useState("");
//   const [pin, setpin] = useState("");
//   const [ad, setad] = useState("");

//   function submitForm() {
//     alert("yooo")
//   }

//   return (
//     <>
//     <NavbarD/>
//     <div className='container' style={{backgroundColor:"whiteSmoke" ,marginTop:"70px"}}> <br />

//       <form onSubmit={loginHandle}>
//         <Card.Header className="kyc">  <h2 >KYC Form</h2></Card.Header>
//         {/* <Card.Body > */}
//         {/* <div  style={{ textAlign: "center" }}>
//             <h3 >  Identity Details</h3>
//           </div> */}

//         <div className='form-group' >
//           <Row>
//             <Col> <label className='mb-1'> First Name </label>
//               <input className='form-control' type="text" placeholder='Enter Your First Name' onChange={(event) => { setFname(event.target.value) }} required  />
//               {fname != "" && fname.length < 2 && (<span className='text-danger'> Enter valid first name</span>)}
//             </Col>
//             <Col> <label className='mb-1'> Last Name </label>
//               <input className='form-control' type="text" placeholder='Enter Your last Name' onChange={(event) => { setlname(event.target.value) }} required  />
//               {lname != "" && lname.length < 2  && (<span className='text-danger'> Enter valid lastname</span>)}
//             </Col>
//           </Row>

//         </div>

//         <div className='form-group'>
//           <label className='mb-1'> Father's/ Spouse's Name </label>
//           <input className='form-control' type="text" placeholder='Father/Spouse Name' onChange={(event) => { setsname(event.target.value) }} required  />
//           {sname != "" && sname.length < 5 && (<span className='text-danger'> Enter valid input</span>)}

//         </div>

//         <div className='form-group'>
//           <Row>
//             <Col>  <label className='mb-1'> Email Address </label>
//               <input className='form-control' type="email" placeholder='Enter Your Email Adress' onChange={(event) => { setemail(event.target.value) }} required  />
//               {email != "" && !regForEmail.test(email) && (<span className='text-danger'> Enter valid input</span>)}
//             </Col>
//             <Col> <div className='form-group'>
//               <label className='mb-1'> Phone Number </label>
//               <input className='form-control' type="number" placeholder='Enter Your Phone Number' onChange={(event) => { setpnum(event.target.value) }} required  />
//               {pnum != "" && pnum.length < 9 && (<span className='text-danger'> Enter valid input</span>)}

//             </div> </Col>
//           </Row>

//         </div>
//         <div className='form-group' >
//           <Row>
//             <Col><label className='mb-1'> Gender </label> <br />
//               <input type="radio" value="Male" name="gender" required /> Male &nbsp;
//               <input type="radio" value="Female" name="gender" required /> Female &nbsp;
//               <input type="radio" value="Other" name="gender" required /> Other
//               {gender != "" && (<span className='text-danger'> Enter valid input</span>)}
//             </Col>
//             <Col>  <div className='form-group' required>
//               <label className='mb-1'> Marital Status </label> <br />
//               <input type="radio" value="married" name="marital" /> Married &nbsp;
//               <input type="radio" value="unmarried" name="marital" /> Unmarried

//             </div></Col>
//           </Row>

//         </div>
//         <label className='mb-1'>  Address </label>
//           <input className='form-control' type="" placeholder='Enter Your Permanent Adress' onChange={(event) => { setaddress(event.target.value) }} required  />
//           {address != "" && address.length < 9 && (<span className='text-danger'> Enter valid input</span>)}

//         <Row>

//           <Col>
//           <div className='form-group' required>

//           <label className='mb-1'>  City </label>
//           <input className='form-control' type=" Text" placeholder='Enter Your  City' onChange={(event) => { setcity(event.target.value) }} required  />
//           {city != "" && city.length < 2 && (<span className='text-danger'> Enter valid input</span>)}
//         </div> </Col>
//         <Col>  <div className='form-group'>
//           <label className='mb-1'> Pincode </label>
//           <input className='form-control' type="number" onChange={(event) => { setpin(event.target.value) }} required  />
//           {pin != "" && pin.length < 4 && (<span className='text-danger'> Enter valid input</span>)}

//         </div>  </Col>
//         </Row>

//         <div className='form-group'>
//           <label className='mb-1'> Aadhar Card Number</label>
//           <input className='form-control' type="number" onChange={(event) => { setad(event.target.value) }} required  />
//           {ad != "" && ad.length < 12 && (<span className='text-danger'> Enter valid input</span>)}

//         </div>
//         <div className='mt-5' style={{ textAlign: "center" }}  >

//           <Button variant="outline-info" type='Submit' onClick={submitForm}>Submit</Button>
//         </div>

//         {/*
//         </Card.Body> */}
//       </form>
//     </div>
//     </>
//   )
// }
