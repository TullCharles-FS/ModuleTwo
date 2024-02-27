const Authors = require("../models/Authors");

const getAllAuthors = async (req, res) => {
  try {
    console.log(">>>", req.query);

    let querString = JSON.stringify(req.query);

    querString = querString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    console.log(JSON.parse(querString));

    const author = await Authors.find(JSON.parse(querString));
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
