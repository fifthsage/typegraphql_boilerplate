import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "./entities/User";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload: any, done: any) => {
  try {
    const user = await User.findOne({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

export const authenticateJwt = (req: any, res: any, next: any) =>
  passport.authenticate("jwt", { session: false }, (error: any, user: any) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(new JwtStrategy(jwtOptions, verifyUser));
passport.initialize();
