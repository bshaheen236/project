const silverDetail = require("../models/silverTrade_schema");
const goldDetail = require("../models/goldTrade_schema");
const userModel = require('../models/user');

const goldView = async (req, res) => {
    try {
        await userModel
            .findById({ _id: req.params.id })
            .populate('goldinfo')
            .then(data => {
                res.status(200).send({
                    statusCode: 200,
                    data: data.goldinfo,
                });
            })
            .catch(() => {
                res.status(400).send({
                    statusCode: 400,
                    err: 'Something went wrong',
                });
            });
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            err: 'Something went wrong',
        });
    }
};

const silverView = async (req, res) => {
    try {
        await userModel
            .findById({ _id: req.params.id })
            .populate('goldinfo')
            .then(data => {
                res.status(200).send({
                    statusCode: 200,
                    data: data.goldinfo,
                });
            })
            .catch(() => {
                res.status(400).send({
                    statusCode: 400,
                    err: 'Something went wrong',
                });
            });
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            err: 'Something went wrong',
        });
    }
};

const sellGold = async (req, res) => {
    try {
        if (!req.body.quantity || req.body.quantity <= 0) {
            return res.status(400).send({
                statusCode: 400,
                msg: 'quantity should not be negative or zero',
            });
        } else {
            await userModel.findById({ _id: req.params.id }).then(data => {
                if (data.goldinfo) {
                    data.populate('goldinfo').then(result => {
                        const updateQantity =
                            parseInt(result.goldinfo.quantity) + parseInt(req.body.quantity);
                        goldDetail
                            .updateOne(
                                { _id: result.goldinfo._id },
                                { $set: { quantity: updateQantity } },
                            )
                            .then(resp => {
                                res.status(201).send({
                                    statusCode: 201,
                                    msg: 'your gold quantity added successfully',
                                    resp,
                                });
                            })
                            .catch(() => {
                                res.status(400).send({
                                    statusCode: 400,
                                    err: 'something went wrong, please try again',
                                });
                            });
                    });
                } else {
                    goldDetail
                        .create(req.body)
                        .then(data => {
                            return userModel.findOneAndUpdate(
                                { _id: req.params.id },
                                { $push: { goldinfo: data._id } },
                                { new: true },
                            );
                        })
                        .then(dbProduct => {
                            res.status(201).json({
                                statusCode: 201,
                                msg: 'Your quantity added successfully',
                                dbProduct,
                            });
                        })
                        .catch(() => {
                            res.status(400).send({
                                statusCode: 400,
                                err: 'something went wrong, please try again',
                            });
                        });
                }
            });
        }
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            err: 'Something went wrong',
        });
    }
};

const sellSilver = async (req, res) => {
    try {
        if (!req.body.quantity || req.body.quantity <= 0) {
            return res.status(400).send({
                statusCode: 400,
                msg: 'quantity should not be negative or zero',
            });
        } else {
            await userModel.findById({ _id: req.params.id }).then(data => {
                if (data.silverinfo) {
                    data.populate('silverinfo').then(result => {
                        const updateQantity =
                            parseInt(result.silverinfo.quantity) + parseInt(req.body.quantity);
                        silverDetail
                            .updateOne(
                                { _id: result.silveinfo._id },
                                { $set: { quantity: updateQantity } },
                            )
                            .then(resp => {
                                res.status(201).send({
                                    statusCode: 201,
                                    msg: 'your silver quantity added successfully',
                                    resp,
                                });
                            })
                            .catch(() => {
                                res.status(400).send({
                                    statusCode: 400,
                                    err: 'something went wrong, please try again',
                                });
                            });
                    });
                } else {
                    silverDetail
                        .create(req.body)
                        .then(data => {
                            return userModel.findOneAndUpdate(
                                { _id: req.params.id },
                                { $push: { silveinfo: data._id } },
                                { new: true },
                            );
                        })
                        .then(dbProduct => {
                            res.status(201).json({
                                statusCode: 201,
                                msg: 'Your silver quantity added successfully',
                                dbProduct,
                            });
                        })
                        .catch(() => {
                            res.status(400).send({
                                statusCode: 400,
                                err: 'something went wrong, please try again',
                            });
                        });
                }
            });
        }
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            err: 'Something went wrong',
        });
    }
};

// if user buy then qantity will decrease 
const buyGold = async (req, res) => {
    try {
        if (!req.body.quantity || req.body.quantity <= 0) {
            return res.status(400).send({
                statusCode: 400,
                msg: 'quantity should not be negative or zero',
            });
        } else {
            await userModel
                .findById({ _id: req.params.id })
                .populate('goldinfo')
                .then(data => {
                    if (
                        parseInt(data.goldinfo.quantity) - parseInt(req.body.quantity)
                    ) {
                        res.status(400).send({
                            statusCode: 400,
                            err: 'Insufficient quantity',
                        });
                    } else {
                        const quantity =
                            parseInt(data.goldinfo.quantity) - parseInt(req.body.quantity);
                        goldDetail
                            .updateOne({ _id: data.goldinfo._id }, { $set: { quantity } })
                            .then(result => {
                                res.status(201).send({
                                    statusCode: 201,
                                    msg: `You buy silver ${req.body.quantity} successfully`,
                                    result,
                                });
                            })
                            .catch(() => {
                                res.status(400).send({
                                    statusCode: 400,
                                    err: 'Something went wrong, buy gold trading not done',
                                });
                            });
                    }
                })
                .catch(() => {
                    res.status(400).send({
                        statusCode: 400,
                        err: 'Something went wrong',
                    });
                });
        }
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            err: 'Something went wrong',
        });
    }
};

const buySilver = async (req, res) => {
    try {
        if (!req.body.quantity || req.body.quantity <= 0) {
            return res.status(400).send({
                statusCode: 400,
                msg: 'quantity should not be negative or zero',
            });
        } else {
            await userModel
                .findById({ _id: req.params.id })
                .populate('silverinfo')
                .then(data => {
                    if (
                        parseInt(data.silverinfo.quantity) - parseInt(req.body.quantity)
                    ) {
                        res.status(400).send({
                            statusCode: 400,
                            err: 'Insufficient quantity',
                        });
                    } else {
                        const quantity =
                            parseInt(data.silverinfo.quantity) - parseInt(req.body.quantity);
                        silverDetail
                            .updateOne({ _id: data.silverinfo._id }, { $set: { quantity } })
                            .then(result => {
                                res.status(201).send({
                                    statusCode: 201,
                                    msg: `You buy silver ${req.body.quantity} successfully`,
                                    result,
                                });
                            })
                            .catch(() => {
                                res.status(400).send({
                                    statusCode: 400,
                                    err: 'Something went wrong, buy silver trading not done',
                                });
                            });
                    }
                })
                .catch(() => {
                    res.status(400).send({
                        statusCode: 400,
                        err: 'Something went wrong',
                    });
                });
        }
    } catch (err) {
        res.status(400).send({
            statusCode: 400,
            err: 'Something went wrong',
        });
    }
};




// // const tradingView =async (req, res) => {
// //     try {
// //         const id = req.params.id;
// //          const totalSum = 0;
// //         const countIncreament = 0;
// //         await userModel.findById({ _id: id })
// //             .then(data => {
// //                 res.status(200).send({
// //                     data, 
// //                     'statusCode': 200
// //                 });

// //                 data.forEach(element => {
// //                     const count = 0;
// //                     const sub = parseFloat(element.quantity * element.price).toFixed(2);
// //                     totalSum += +sub;
// //                     countIncreament = countIncreament + count + 1;
// //                 });
// //                 req.params.tquantity = totalSum;
// //             })
// //             .catch(err => res.status(400).send({
// //                 'err': 'User not found',
// //                 'statusCode': 400
// //             }));
// //     }
// //     catch (err) {
// //         res.status(400).send({
// //             'err': 'User not found',
// //             'statusCode': 400
// //         });
// //     }

// // }


// // const addedTrading = async (req, res) => {
// //     const { id } = req.params;

// //     try {
// //         const { quantity, price, duration, tquantity } = req.body;
// //         const buy = await GoldSell.findById(id);

// //         if (buy) {
// //             return res.status(400).send({
// //                 'statusCode': 400,
// //                 'err': 'user email already exist'
// //             })
// //         }
// //         const addItem = new userModel({
// //             quantity: quantity,
// //             price: price,
// //             duration: duration,
// //             tquantity: tquantity,
// //         });

// //         const addedData = await addItem.save();

// //         res.status(201).send({
// //             "statusCode": 201,
// //             "msg": "user registered successfully",
// //             "data": addedData
// //         })

// //     }
// //     catch (error) {
// //         res.status(400).send({ 'status': 400, 'err': 'Something went wrong' });
// //     }
// // }

// // function updateGold(req, res) {
// //     let eid = req.params.id;
// //     let formData = req.body;
// //     // console.log(eid);
// //     GoldSell.updateOne({ _id: eid }, { $set: formData }, (err) => {
// //         console.log(formData);
// //         if (err) {
// //             console.log("Error");
// //         } else {
// //             res.send({ formData });
// //         }
// //     });
// // }

module.exports = {
    goldView,
    silverView,
    sellGold,
    sellSilver,
    buyGold,
    buySilver
}