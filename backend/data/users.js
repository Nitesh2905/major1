import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User1",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Admin User2",
    email: "nitesh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nitesh Yadav",
    email: "nitesh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Dhruv Rai",
    email: "dhruv@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
