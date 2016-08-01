/**
 * OneController
 *
 * @description :: Server-side logic for managing ones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OneController.create()`
   */
  create: function (req, res) {
    var value = req.params.all();
    One.create(value,function (err,result) {
     if (err) {
      return res.send(err,500);
     }
     res.json({create:result});
    });
  },


  /**
   * `OneController.update()`
   */
  update: function (req, res) {
    var value = req.params.all();
    var id = req.param('id');
    One.update(id,value,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({update:result});
    });
  },


  /**
   * `OneController.delete()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
    One.destroy(id,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:"deleted"});
    });
  },


  /**
   * `OneController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    One.findOne(id,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:result});
    });
  }
};

