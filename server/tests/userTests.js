// const request = require("supertest");
// const express = require("express");
// const bcrypt = require("bcrypt");
// const { registerUser, loginUser, getUsernameById } = require("../controllers/userController");
// const User = require("../models/users");

// jest.mock("../models/users");

// const app = express();
// app.use(express.json());
// app.post("/register", registerUser);
// app.post("/login", loginUser);
// app.get("/user/:userId", getUsernameById);

// describe("User Controller Tests", () => {
//   describe("registerUser", () => {
//     it("should register a new user", async () => {
//       const userData = { username: "testuser", email: "test@example.com", password: "testpassword" };
//       const hashedPassword = await bcrypt.hash(userData.password, 10);
//       User.findOne.mockResolvedValue(null);
//       User.create.mockResolvedValue({});

//       const response = await request(app)
//         .post("/register")
//         .send(userData);

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe("User registered successfully");
//     });

//     it("should return an error if user already exists", async () => {
//       const userData = { username: "existinguser", email: "existing@example.com", password: "testpassword" };
//       User.findOne.mockResolvedValue({});

//       const response = await request(app)
//         .post("/register")
//         .send(userData);

//       expect(response.status).toBe(400);
//       expect(response.body.message).toBe("User already exists");
//     });
//   });

//   describe("loginUser", () => {
//     it("should login a user with valid credentials", async () => {
//       const userData = { email: "test@example.com", password: "testpassword" };
//       const hashedPassword = await bcrypt.hash(userData.password, 10);
//       User.findOne.mockResolvedValue({ password_hash: hashedPassword, user_id: 1 });

//       const response = await request(app)
//         .post("/login")
//         .send(userData);

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe("Login successful");
//       expect(response.body.userId).toBe(1);
//     });

//     it("should return an error for invalid credentials", async () => {
//       const userData = { email: "invalid@example.com", password: "invalidpassword" };
//       User.findOne.mockResolvedValue(null);

//       const response = await request(app)
//         .post("/login")
//         .send(userData);

//       expect(response.status).toBe(401);
//       expect(response.body.message).toBe("Invalid email or password");
//     });
//   });

//   describe("getUsernameById", () => {
//     it("should return username for a valid userId", async () => {
//       const userId = 1;
//       const userData = { user_id: userId, username: "testuser" };
//       User.findOne.mockResolvedValue(userData);

//       const response = await request(app).get(`/user/${userId}`);

//       expect(response.status).toBe(200);
//       expect(response.body.username).toBe("testuser");
//     });

//     it("should return an error for an invalid userId", async () => {
//       const userId = 999;
//       User.findOne.mockResolvedValue(null);

//       const response = await request(app).get(`/user/${userId}`);

//       expect(response.status).toBe(404);
//       expect(response.body.message).toBe("User not found");
//     });
//   });
// });
