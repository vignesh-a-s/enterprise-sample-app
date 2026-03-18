const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Vignesh" },
    { id: 2, name: "John" }
  ]);
};

module.exports = { getUsers };