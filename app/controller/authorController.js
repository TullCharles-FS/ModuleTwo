const Authors = require("../models/Authors");

const getAllAuthors = async (req, res) => {
  try {
    //console.log(">>>", req.query);

    let querString = JSON.stringify(req.query);
    querString = querString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    let query = Authors.find(JSON.parse(querString));
    //console.log(JSON.parse(querString));

    if (req.query.select) {
      const fields = req.query.select.split(",").join("");
      query = Authors.find({}).select(fields);
    }

    if (req.query.sort) {
      const sortData = req.query.sort.split(",").join("");
      query = Authors.find({}).sort(sortData);
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    const author = await query;
    res.status(200).json({
      data: author,
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

const getAuthorById = async (req, res) => {
  const {id} = req.params;
  try {
    const author = await Authors.findById(id, req.body, {new: true});
    res.status(200).json({
      data: author,
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

const createAuthor = async (req, res) => {
  const {author} = req.body;
  try {
    const newAuthor = await Authors.create(author);
    console.log("data >>>", newAuthor);
    res.status(200).json({
      data: author,
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

const updateAuthor = async (req, res) => {
  const {id} = req.params;
  try {
    const author = await Authors.findByIdAndUpdate(id, req.body.author, {
      new: true,
    });
    res.status(200).json({
      data: author,
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

const deleteAuthor = async (req, res) => {
  const {id} = req.params;
  try {
    const author = await Authors.findByIdAndDelete(id, req.body, {new: true});
    res.status(200).json({
      data: author,
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
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  createAuthor,
  deleteAuthor,
};
