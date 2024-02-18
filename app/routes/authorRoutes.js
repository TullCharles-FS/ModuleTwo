const router = require("express").Router();

const {
  createAuthor,
  getAllAuthors,
  getAuthorsById,
  updateAuthor,
  deleteAuthor,
} = require("../controller/authorConroller");

router.get("/", getAllAuthors);

router.get("/:id", getAuthorsById);

router.post("/", createAuthor);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
});

router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
});

router.put("/:id", (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
});

router.delete("/:id", (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Author endpoint`,
  });
});

module.exports = router;
