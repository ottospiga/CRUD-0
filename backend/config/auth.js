module.exports = {
  ensureAuthenticated: function (req,res,next){
      if(req.isAuthenticated()){
          return next()
      } 
      req.flash('error_msg','Por favor, faça login')
      res.redirect('/recrutador/login')
  },
  forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/dashboard');      
    }
}