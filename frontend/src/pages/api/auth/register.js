import axios from '../../../lib/api';
export default async = (req, res) => {
  if (req.method === 'POST') {
    resp = await axios

      .post('/api/auth/local/register', req.body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return res.status(200).json({
          message: `Check your email (${req.body.email}) and follow the instructions to confirm your account.`,
        });
      })
      .catch((error) => {
        if (!error.response.data.error.message) {
          return res.status(500).json({ message: 'Internal server error' });
        } else {
          const messages = error.response.data.error.message;
          return res.status(403).json({ message: messages });
        }
      });
  }
};


// import axios from 'axios';
// import { setCookie } from 'cookies'

// export default async (req, res) => {
//   const { username, password, email } = req.body;

//   try {
//     const response = await axios.post('http://localhost:1337/auth/local/register', {
//       username,
//       email,
//       password,
//     })

//     setCookie({ res }, 'jwt', response.data.jwt, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== 'development',
//       maxAge: 30 * 24 * 60 * 60,
//       path: '/',
//     });

//     res.status(200).end();
//   } catch (e) {
//     res.status(400).send(e.response.data.message[0].messages[0]);
//   }
// }