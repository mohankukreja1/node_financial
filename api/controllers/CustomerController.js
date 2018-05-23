/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'new': function (req ,res) {
    res.view('customer/new')
  },
  create:function (req,res,next) {

    Customer.create(req.query, function (err ,customer) {
if(err) return next(err);
res.redirect('/customer/show')

    })

  },
  show:function (req,res,next) {
    Customer.find(function (err,response) {
      if(err) throw err;
      console.log(response)
      res.view('customer/show',{
        customer:response
      })
    })
  },
  delete:function (req,res,next) {

    Customer.destroy(req.query,function (err,result) {
      if(err) throw err;
      res.redirect('/customer/show');
    })
  },


};

