const getAllProfiles = async (req, res) => {
  const db = req.app.get('db');

  const result = await db.get_all_profiles().catch((err) => {
    console.log(err);
  });
  console.log(result);
  res.status(200).json(result);
};

module.exports = {
  getAllProfiles,
};
