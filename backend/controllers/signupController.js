

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
