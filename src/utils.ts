import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";
import moment from "moment";
import bcrypt from "bcrypt";
// import crypto from "crypto";

// export const generateSecret = () => {
//   const randomNumber = Math.floor(Math.random() * adjectives.length);
//   return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
// };

// export const generateCryptedSecret = () => {
//   const secret = generateSecret();
//   const hashedSecret = bcrypt.hash(secret, 5);
//   return hashedSecret;
// };

export const sendMail = email => {
  const options = {
    auth: {
      apiUser: process.env.SENDGRID_USERNAME,
      apiKey: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "___@gmail.com",
    to: address,
    subject: "__ 로그인 시크릿 🔒",
    html: `안녕하세요. ____의 로그인 시크릿입니다. <strong>${secret}</strong>.<br/>복사하여서 아래의 링크로 입력해주세요.`
  };
  return sendMail(email);
};

export const sendPasswordResetMail = (address, username, userId, secret) => {
  const email = {
    from: "___@gmail.com",
    to: address,
    subject: "____의 비밀번호 변경 메일입니다.",
    html: `____ 사이트의 아이디 "${username}"의 비밀번호 변경 요청에 의한 메일입니다.<br/> <a href="localhost:3000/password-reset/:${userId}/:${secret}"><strong>비밀번호 변경 링크</strong></a>.<br/> 위의 링크를 클릭하여 새로운 비밀번호로 변경하시기 바랍니다.`
  };
  return sendMail(email);
};

export const generateToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "24h" });

export const hashPassword = password => {
  const BCRYPT_ROUNDS = 10;
  return bcrypt.hash(password, BCRYPT_ROUNDS);
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const todayInBetween = (startDate, endDate) => {
  if (moment().isSameOrAfter(startDate) && moment().isSameOrBefore(endDate)) {
    return true;
  } else {
    return false;
  }
};

export const checkDatePassedToday = date => {
  const datePassed = moment().isAfter(date);
  if (datePassed) {
    return true;
  } else {
    return false;
  }
};

export const countDownDays = targetDate => {
  const leftDays = moment(targetDate).diff(new Date(), "days");
  if (leftDays > 0) {
    return leftDays;
  } else {
    return 0;
  }
};

export const getAge = bDate => {
  const today = new Date();
  // const birthDate = new Date(DOB);
  const birthDate = new Date(bDate);
  const age = today.getFullYear() - birthDate.getFullYear() + 1;
  // const m = today.getMonth() - birthDate.getMonth();
  // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //   age = age - 1;
  // }

  return age;
};
