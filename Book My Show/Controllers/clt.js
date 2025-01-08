const schema = require("../Model/movieSchema");
const fs = require("fs");

module.exports.firstPage = async (req, res) => {
  let data = await schema.find({});
  res.render("index", { data });
};
module.exports.addMovie = async (req, res) => {
  res.render("addMovie");
};
module.exports.showMovie = async (req, res) => {
  req.body.img = req.file.path;
  await schema.create(req.body).then(() => {
    res.redirect("/");
  });
};
module.exports.deleteMovie = async (req, res) => {
  const singleData = await schema.findById(req.query.id);
  fs.unlinkSync(singleData.img);
  await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/");
  });
};
module.exports.editMovie = async (req,res)=>{
    const data = await schema.findById(req.query.id)
    .then(data => res.render ("updateMovie",{data}))
}
module.exports.updateMovie = async (req,res)=>{
    let image = "";
    let singleData = await schema.findById(req.body.id)
    // req.file ? image = req.file.path : image = singleData.img
    req.file ? (image = req.file.path) : (image = singleData.img);
    req.file && fs.unlinkSync(singleData.img)
    req.body.img = image
    await schema.findByIdAndUpdate(req.body.id , req.body)
    .then(data =>{
        res.redirect("/");
    });
}