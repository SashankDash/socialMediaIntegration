import express from 'express';
import passport from 'passport';
import userController from '../controller/userController.js';

const router = express.Router();

/**
 * @swagger
 * /login/google:
 *   get:
 *     description: Google Registration API
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  '/login/google',
  passport.authenticate('google', { scope: ['profile email'] })
);

/**
 * @swagger
 * /login/facebook:
 *   get:
 *     description: Facebook Registration API
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  '/login/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

/**
 * @swagger
 * /google:
 *   get:
 *     description: For redirecting to google auth
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/google', passport.authenticate('google'), (req, res) => {
  res.redirect('/profile');
});

/**
 * @swagger
 * /facebook:
 *   get:
 *     description:  For redirecting to Facebook auth
 *     responses:
 *       200:
 *         description: Success
 */

router.get('/facebook', passport.authenticate('facebook'), (req, res) => {
  res.redirect('/profile');
});

/**
 * @swagger
 * /profile:
 *   get:
 *     description: Checks login state of user and shows data 
 *     responses:
 *       200:
 *         description: Success
 */
 router.get('/profile', userController.register);

/**
 * @swagger
 * /logout:
 *   get:
 *     description: logged in user gets logged out.
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/profile');
});



export default router;
