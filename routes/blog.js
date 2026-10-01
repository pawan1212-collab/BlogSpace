const express = require("express");

const router = express.Router();

const blogs = [];

router.post("/", (req, res) => {
  const { title, category, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      message: "Title, content and author are required"
    });
  }

  const blog = {
    id: blogs.length + 1,
    title,
    category: category || "General",
    content,
    author,
    createdAt: new Date().toISOString()
  };

  blogs.push(blog);

  res.status(201).json({
    message: "Blog created successfully",
    blog
  });
});

router.get("/", (req, res) => {
  res.json(blogs);
});

module.exports = router;