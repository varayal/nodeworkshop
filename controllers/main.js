const Product = require('.././models/product')
const cloudinary = require('cloudinary')


exports.init = (req, res) => {

  //res.send('hola mundo desde rutas y controladores').end();

  Product.find((err, response) => {

      if(err) {
        console.log(err)
      }else{
        res.render('index', {product:response})
  }
});
}


exports.admin = (req, res) => {

  //res.send('hola mundo desde rutas y controladores').end();

  res.render('admin');

}

exports.create = (req, res) => {

  //res.send('hola mundo desde rutas y controladores').end();
  console.log(req.files.fileimage.path);
  
  cloudinary.uploader.upload(req.files.fileimage.path, function(result) {

  let data = new Product({
      name: req.fields.name,
      price: req.fields.price,
      img: result.url.path,
      description: req.fields.description,
      date: new Date()
    });


    data.save((err, response) =>{

        if(err){
          console.log(err)
        } else {
          res.redirect('/');
        }
    })
  });
}
