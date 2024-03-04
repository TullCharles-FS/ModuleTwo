const {Collection} = require("mongoose");
const Authors = require("../models/Authors");
const dataCollections = require("../models/dataCollections");

const getData = async (req, res) => {
  try {
    //console.log(">>>", req.query);

    //let querString = JSON.stringify(req.query);

    // querString = querString.replace(
    // /\b(gt|gte|lt|lte)\b/g,
    // (match) => `$${match}`
    //);
    // console.log(JSON.parse(querString));

    const dataCollect = await dataCollections.find();
    res.status(200).json({
      data: dataCollect,
      success: true,
      message: `${req.method} - request to Data made`,
    });
  } catch ({message}) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const getDataById = async (req, res) => {
  try {
    const {id} = req.params;
    //console.log();
    const dataCollect = await dataCollections.findById(id).populate("author");

    if (!dataCollect) {
      return res.status(400).json({success: false, message: "Data not found"});
    }
    res.status(200).json({
      data: dataCollect,
      success: true,
      message: `${req.method} - request made`,
    });
  } catch ({message}) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const createData = async (req, res) => {
  try {
    const {dataCollect} = req.body;
    const user = await Authors.findById(dataCollect.author);
    dataCollect.author = user;
    const dataC = new Collection(dataCollect);
    user.dataCollect.push(dataC._id);
    const newData = [dataC.save(), user.save()];
    await Promise.all(newData);

    res.status(200).json({
      data: dataCollect,
      success: true,
      message: `${req.method} - Data Received`,
    });
  } catch ({message}) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const deleteData = async (req, res) => {
  const {id} = req.params;
  try {
    const dataCollect = await Authors.findByIdAndDelete(id, req.body, {
      new: true,
    });
    res.status(200).json({
      data: dataCollect,
      success: true,
      message: `${req.method} - request to Author endpoint`,
    });
  } catch (error) {
    console.log("error", error);
    res.status(404).json({
      error: error.message,
    });
  }
};

module.exports = {
  getData,
  getDataById,
  createData,
  deleteData,
};
