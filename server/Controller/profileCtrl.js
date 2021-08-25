module.exports = {
  getAllProfiles: (req, res) => {
    const db = req.app.get("db");

    db.get_all_profiles()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
        return;
      });
  },
};
