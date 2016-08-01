/**
 * ThroughController
 *
 * @description :: Server-side logic for managing throughs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ThroughController.create()`
   */
  create: function (req, res) {
    var values = req.params.all();
    Through.create(values,function(err,create){
      if (err) {
        return res.send(err,500);
      }
      res.json({create:create});
    });
  },


  /**
   * `ThroughController.update()`
   */
  update: function (req, res) {
   var values = req.params.all();
   var id = req.param('id');
    Through.update(id,values,function(err,update){
      if (err) {
        return res.send(err,500);
      }
      res.json({update:update});
    });
  },


  /**
   * `ThroughController.delete()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
    Through.destroy(id,function(err,result){
      if (err) {
        return res.send(err,500);
      }
      res.json({value:"deleted"});
    });
  },


  /**
   * `ThroughController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Through.findOne(id).populate('ones').populate('twos').exec(function(err,found){
    if (err) {
      return res.send(err,500);
    }
    res.json({values:found});
  });
  }
};

