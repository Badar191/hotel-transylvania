const express = require('express')
// const signu = require('../../transylvania-perks/src/signup')
const router = express.Router();
// const App = require('../../transylvania-perks/src/App') 

const  {
    createSignUp,
    bookRoom,
    inputuser
} = require('../controllers/signupController')

router.post('/', createSignUp);
router.post('/bookroom', bookRoom)
router.post('/inputuser',inputuser)
// router.get('/', App)

module.exports = router;