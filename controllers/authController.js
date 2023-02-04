const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel  = require('../models/user');
const transporter = require('../mails/nodemailer');
const saltRounds = 10;
const otpGenerator = require('random-number');

const deleteAllUsers = async (req, res) => {
    try {
        await userModel.remove()
            .then(data => {
                res.status(200).send('all the users are deleted...')
            })
            .catch(err => res.status(400).then('something went wrong'));
    }
    catch (err) {
        res.status(500).send('Internal server error');
    }
}

const addUser = async (req, res) => {
    
    console.log(res,"yyyyyy");
    try {
        
        const { fname, lname, email, password, phone } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).send({
                'statusCode': 400,
                'err': 'user email already exist'
            })
        }
        const newUser = new userModel({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            phone: phone
        });

        const userRegistered = await newUser.save();

        res.status(201).send({
            "statusCode": 201,
            "msg": "user registered successfully",
            "data": userRegistered
        })
    }
    catch (err) {
        res.status(400).send({ 'status': 400, 'err': 'Something went wrong' });
    }
}

const getUsers = async (req, res) => {
    try {
        await userModel.find()
            .then(data => {
                res.status(200).send({      // ok
                    data,
                    'statusCode': 200
                });
            })
            .catch(err => res.status(400).send({
                'err': 'User Not Found',
                'statusCode': 400
            }));
    }
    catch (err) {
        res.status(400).send({
            'err': 'Users not found',
            'statusCode': 400
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await userModel.findById({ _id: id })
            .then(data => {
                res.status(200).send({
                    data,
                    'statusCode': 200
                });
            })
            .catch(err => res.status(400).send({
                'err': 'User not found',
                'statusCode': 400
            }));
    }
    catch (err) {
        res.status(400).send({
            'err': 'User not found',
            'statusCode': 400
        });
    }
}

const editUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { fname, lname, email, password, phone } = req.body;
        const hash = bcrypt.hashSync(password, saltRounds);
        await userModel.findByIdAndUpdate(id, { fname: fname, lname: lname, email: email, password: hash, phone: phone })
            .then(data => {
                res.status(200).send({      // no-content
                    'message': 'User details updated successfully',
                    'statusCode': 200,
                    data
                });
            }).catch(err => {
                res.status(400).send({
                    'err': 'User not found',
                    'statusCode': 400
                });
            })
    }
    catch (err) {
        res.status(400).send({
            'err': 'User not found',
            'statusCode': 400
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);
        if (!user) {
            res.status(400).send({ 'err': 'User not found' });
        }
        await userModel.findByIdAndDelete(id)
            .then(data => {
                res.status(202).send({      // accepted
                    'message': 'User Deleted',
                    'statusCode': 202
                });
            }).catch(err => {
                res.status(400).send({ 'err': 'Something went wrong' });
            })
    }
    catch (err) {
        res.status(400).send({ 'err': 'User not found' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            const verify = await bcrypt.compareSync(password, user.password);
            if (verify) {
                const token = await user.generateUserToken();
                res.cookie('_token', token);
                res.status(200).send({
                    'statusCode': 200,
                    'msg': 'user logged-In successfully',
                    'data': user,
                    'token': token
                })
            }
            else {
                res.status(400).send({
                    'statusCode': 400,
                    'err': 'incorrect email & password'
                })
            }
        }
        else {
            res.status(400).send({
                'statusCode': 400,
                'err': 'invalid email and password'
            })
        }
    }
    catch (err) {
        res.status(400).send({ 'status': 400, 'err': 'Internal Server Error' });
    }
}

const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token => {
            return token.token !== req.token;
        }))

        res.clearCookie('_token');
        await req.user.save();
        res.status(200).send({
            'statusCode': 200,
            'msg': 'Logout Successfully'
        });
    }
    catch (err) {
        res.status(500)
            .send({
                'statusCode': 500,
                'err': 'Internal Server Error'
            })
    }
}

const sendpasswordlink = async (req, res) => {
    console.log(req.body);

    const { email } = req.body;
    console.log('aaaaaaaaaaaaaaaaaaaaaaa');
    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    console.log('bbbbbbbbbbbbbbbbbbbbbb');
    try {
        const userfind = await userModel.findOne({ email: email });

        console.log('cccccccccccccccccccccccc');
        // token generate for reset password
        const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY, {
            expiresIn: "2h"
        });


        const setusertoken = await userModel.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true });
        console.log(setusertoken)

        if (setusertoken) {
            console.log(process.env.EMAIL)
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Sending Email For password Reset",
                text: `This Link Valid For 2 MINUTES http://localhost:3000/forgotpassword/${userfind.id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                console.log("jjjjjjjjjjjjjjjjjjjj", info)

                if (error) {
                    console.log("error", error);
                    console.log("fffffffffffff")
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                }
            })

        }

    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }

}

const forgotPassword = async (req, res) => {
    const { id, token } = req.params;

    try {
        const validuser = userModel.findOne({ _id: id, verifytoken: token });

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        if (validuser && verifyToken.email) {
            res.status(201).json({ status: 201, validuser })
        } else {
            res.status(201).json({ status: 401, message: "user not exist" })
        }

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
}

const changePassword = async (req, res) => {
    const { id, token, password } = req.params;
    console.log('params........', req.params);
    try {
        const validuser = await userModel.findOne({ _id: id, verifytoken: token });

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyToken, validuser, "verifyToken")
        if (validuser && verifyToken.email) {
            console.log("hhhhhhhhhhhhh")
            const newpassword = await bcrypt.hash(password, 12);

            const setnewuserpass = await userModel.findByIdAndUpdate({ _id: id }, { password: newpassword });

            setnewuserpass.save();
            res.status(201).json({ status: 201, setnewuserpass })

        } else {
            res.status(401).json({ status: 201, message: "user not exist" })
        }
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
}

// login with otp mail
const loginByEmail = async (req, res) => {
    try {

        const email = req.body.email;
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(400).send({
                'statusCode': 400,
                'err': 'user not found, please try again'
            })
        }
        
        const otp = otpGenerator({
            min: 1000,
            max: 9999,
            integer: true
        })
        
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: `OTP for logging in to your account ${email}`,
            text: `Here is your otp : ${otp}`
        }
        console.log(mailOptions);
        const token = await user.generateUserToken();
        console.log(token);
        
        if(token){
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.status(400).send({
                        'statusCode': 400,
                        'err': 'something went wrong, please enter your email',
                    })
                }
                else {
                    res.status(200).send({
                        'statusCode': 200,
                        'msg': 'Otp send successfully',
                        'data' : user,
                        'token' : token,
                        'otp' : otp
                    })
                }
            })
        }
        else{
            res.status(400).send({
                'statusCode' : 400,
                'msg' : 'something went wrong, please try again'
            })
        }
    }
    catch (err) {
        res.status(400).send({
            'statusCode': 500,
            'err': 'Something went wrong'
        })
    }
}

//search 

async function searchProducts(req, res) {
    const { category, direction = "desc", sortBy = "_id", name="" } = req.query;
  
    const searchObj = {};
  
    if (category) searchObj.category = category;
    searchObj.name = { $regex: name, $options: "i" }
  
    const products = await Product.find(searchObj).sort({ [sortBy]: direction });
  
    res.send({"err":0,"prodata":products});
  }

module.exports = { addUser, getUsers, getUserById, editUser, deleteUser, login, logout, sendpasswordlink, forgotPassword, deleteAllUsers, changePassword,loginByEmail };