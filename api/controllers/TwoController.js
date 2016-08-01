/**
 * TwoController
 *
 * @description :: Server-side logic for managing twoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TwoController.create()`
   */
  create: function (req, res) {
   var value = req.params.all();
    Two.create(value,function (err,result) {
     if (err) {
      return res.send(err,500);
     }
     res.json({create:result});
    });
  },


  /**
   * `TwoController.update()`
   */
  update: function (req, res) {
    var value = req.params.all();
    var id = req.param('id');
    Two.update(id,value,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({update:result});
    });
  },


  /**
   * `TwoController.delete()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
    Two.destroy(id,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:"deleted"});
    });
  },


  /**
   * `TwoController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Two.findOne(id,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:result});
    });
  }
};

