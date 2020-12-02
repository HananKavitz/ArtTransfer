const path = require('path');
const router = require('express').Router();

router.get('/downloadStyledImage', (req, res, next) => {
    const styled_path = path.resolve(__dirname,'../images/kandinsky_style2.jpeg');
    console.log(styled_path);
    // const options = {'Content-Disposition': 'attachment;filename=hanan.jpeg',
    //                   'Content-Type':'image/jpeg'};
  
    // res.setHeader('Content-Type','image/jpeg')
    // res.setHeader('Content-Disposition', 'attachment;filename=hanan.jpeg');
    // res.sendFile(styled_path)
    res.download(styled_path);
  });

  module.exports = router;