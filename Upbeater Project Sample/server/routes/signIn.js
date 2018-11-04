
const UserSession = require('../models/userSession');
const User = require('../models/user');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = (app) => {

  app.post('/api/login', jsonParser, (req, res, next) => {
    const { email, password } = req.body
    console.log(email, password)

    User.find({
      email: email
    }, (err, users) => {
      if (err) {
        console.log('err 2:', err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }
      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }
      // Otherwise correct user
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error: server error'
          });
        }
        return res.send({
          success: true,
          message: 'Redirect user to Edit Porfolio',
          token: doc._id
        });
      });
    });
  });

};
