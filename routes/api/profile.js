// const express = require('express');
// const router = express.Router();
// const auth = require('../../middleware/auth');
// const { check, validationResult } = require('express-validator/check')

// const Profile = require('../../models/Profile');
// const User = require('../../models/User')

// router.get('/me', auth, async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ user: req.user.id }).populate('user',
//       ['name', 'avatar']);
//     if (!profile) {
//       return res.status(400).json({ msg: 'There is no profile' })
//     }

//     res.json(profile)
//   } catch (err) {
//     console.error(err.message)
//     res.status(500).send('Server Error')
//   }
// })

// router.post('/', [auth, [
//   check('location', 'Location is empty')
//     .not()
//     .isEmpty(),
//   check('phone', 'Phone is empty')
//     .not()
//     .isEmpty(),
// ]],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() })
//     }

//     const {
//       location,
//       phone
//     } = req.body;
//     const profileFields = {};
//     profileFields.user = req.user.id;

//     if (location) profileFields.location = location
//     if (phone) profileFields.phone = phone
//     console.log(profileFields)
//     try {
//       let profile = await Profile.findOne({ user: req.user.id })

//       if (profile) {
//         profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields },
//           { new: true }
//         );

//         return res.json(profile)
//       }

//       profile = new Profile(profileFields);

//       await profile.save();
//       res.json(profile)
//     } catch (err) {
//       console.error(err.message)
//       res.status(500).send('Server Error')
//     }
//   }
// );

// router.get('/', async (req, res) => {
//   try {
//     const profiles = await Profile.find().populate('user', ['name', 'avatar']);
//     res.json(profiles)
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error')
//   }
// });

// router.get('/user/:user_id', async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

//     if (!profile)
//       return res.status(400).json({ msg: 'Profile not found' })

//     res.json(profile)
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === 'ObjectId') {
//       return res.status(400).json({ msg: 'Profile not found' })

//     }
//     res.status(500).send('Server Error')
//   }
// });

// router.delete('/', auth, async (req, res) => {
//   try {

//     await Profile.findOneAndRemove({ user: req.user.id });
//     await User.findOneAndRemove({ _id: req.user.id });

//     res.json({ msg: 'user deleted' })
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error')
//   }
// });


// module.exports = router;