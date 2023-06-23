const signUp = require('../signupSchema');
const book = require('../bookSchema');
const twilio = require('twilio');
const accountSid = 'AC1bfbe6853d2faf2611ccd12cc3c58730';
const authToken = 'df0ae517da6cf43864d525ed25bd966f';
const client = twilio(accountSid, authToken);

function generateOTP() {
  const otpLength = 5;
  const min = Math.pow(10, otpLength - 1);
  const max = Math.pow(10, otpLength) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




//create room API


const createSignUp = async (req, res) => {
  // console.log('errrrrorooooorr')
  const { fname, sname, dateofbirth, phonenumb, gender, password, email, cnic } = req.body;
  const user = await signUp.findOne({ email });
  if (!user) {
    // try {
      // const newSignUp = await signUp.create({ fname, sname, dateofbirth, phonenumb, gender, password, email, cnic })
      const otp = generateOTP();
      // const otp = 54321 
      client.messages
      .create({
        body: `Your OTP is: ${otp}`,
        from: '+1 315 626 8486',
        to: '+923369949491'
      })
      .then((message) => {
        console.log('Message sent:', message.sid)
      } )
      .catch((error) => console.error('Error sending message:', error));
      res.status(201).json({otp})
      console.log('else')
    // }
    // catch (error) {
    //   console.log(error)
    //   res.status(500).json({ error: error.message });
    // }
  }
  else {
    // const otp = 54321 
    res.status(202).json('This email already exist');

    // console.log('else')
  }
}

const inputuser = async (req, res) => {
  const { fname, sname, dateofbirth, phonenumb, gender, password, email, cnic } = req.body;
  let newSignUp;
  try {
    newSignUp = await signUp.create({ fname, sname, dateofbirth, phonenumb, gender, password, email, cnic });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
    return; // Add return statement to prevent further execution
  }
  res.status(201).json(newSignUp);
};


const bookRoom = async (req, res) => {
  const { email, password, suite } = req.body;
  const user = await signUp.findOne({ email });

  if (!user) {
    res.status(202).json('This email does not exist');
  } else {
    if (password !== user.password) {
      res.status(203).json('Your Password is Incorrect');
    } else {
      try {
        const newBook = await book.create({ email, password, suite })
        // console.log('else')
      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
      }
      res.status(201).json('You have logged in');
    }
  }
};

module.exports = { createSignUp, bookRoom, inputuser }
