const data = require('../db/index')

const searchRController = {
    index: function(req, res) {
        res.render('searchR', {productos: data.productos});
      },
    
}
module.exports = searchRController