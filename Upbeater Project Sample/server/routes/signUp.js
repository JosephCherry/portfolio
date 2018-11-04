const User = require('../models/user');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


module.exports = (app) => {
  /*
   * Sign up
   */
  app.post('/api/account/signup', jsonParser, (req, res, next) => {
    let { email, password } = req.body
    console.log(email, password)

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }
    email = email.toLowerCase();
    email = email.trim();
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.findOne({
      email: email
    }).then((currentUser) => {
      if (currentUser) {
        return res.send({
          success: false,
          message: 'Error: User already exists'
        });

      } else {

        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: 'Error: Server error'
            });
          }
          return res.send({
            success: true,
            message: 'Signed up'
          });
        });
      };

    });
  });
};