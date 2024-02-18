getAllAuthors = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
};

getAuthorById = (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
};

createAuthor = (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
};

updateAuthor = (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
};

deleteAuthor = (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  createAuthor,
  deleteAuthor,
};
