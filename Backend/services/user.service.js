const { sortUserPlugins } = require("vite");
const userModel = require("../Models/user.model");



module.exports.createUser = async ({
  firstName,
  lastName,
  password,
  email,
}) => {
  if (!firstName || !email || !password) {
    throw new Error("All the above fields are required!");
  }
  const user = userModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
  });
  return user;
};
