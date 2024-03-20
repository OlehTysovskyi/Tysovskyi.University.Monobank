// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// const User = require('../models/users');

// const googleAuthStart = async (req, res) => {
//     const redirectUri = `https://www.googleapis.com/oauth2/v2/auth?response_type=code&scope=email%20profile&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}`;
    
//     res.redirect(redirectUri);
//   };

// const googleAuthCallback = async (req, res) => {
//   const { token } = req.body;

//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });
//     const payload = ticket.getPayload();
//     const userId = payload['sub'];

//     let user = await User.findOne({ where: { googleId: userId } });

//     if (!user) {
//       user = await User.create({ googleId: userId, email: payload.email });
//     }

//     res.status(200).json({ user });
//   } catch (error) {
//     console.error('Google authentication error:', error);
//     res.status(500).json({ message: 'Error during Google authentication' });
//   }
// };

// module.exports = { googleAuthStart, googleAuthCallback };
