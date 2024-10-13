exports.getPosts = (req, res, next) => {
  console.log("getPosts requested");
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Maximilian",
        },
        createdAt: new Date(),
      },
    ],
  });
};
exports.postPost = (req, res, next) => {
  console.log("postPost requested");
  console.log("body:", req.body);
  const title = req.body.title;
  console.log("title", title);
  const content = req.body.content;
  console.log("content", content);

  // Create a post in the db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title,
      content,
    },
  });
};
