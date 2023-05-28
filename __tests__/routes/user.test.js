import request from 'supertest';
import dotenv from 'dotenv';

import app from '../../dist/app';

dotenv.config();

process.env.DATABASE_URL = process.env.TEST_DATABASE_URL

const requests = {
  signup: request(app).post("/api/v1/auth/signup").send({
    username: "username",
    email: "username@gmail.com",
    password: "kljsfdlmsdlsmdds"
  }),
  validateSignup: request(app).post("/api/v1/auth/signup").send({
    email: "username@gmail.com",
    password: "nljlqqmk%MQ"
  }),
  duplicateSignup: request(app).post("/api/v1/auth/signup").send({
    username: "duplicate",
    email: "duplicate@gmail.com",// this email already exist in DB
    password: "kljsfdlmsdlsmdds",
  }),
  sanatizeSignup: request(app).post("/api/v1/auth/signup").send({
    username: "<script>code</script>",
    email: "code@gmail.com",
    password: "kljsfdlmsdlsmdds",
  }),

  signin: request(app).post("/api/v1/auth/signin").send({
    email: "duplicate@gmail.com",
    password: "kljsfdlmsdlsmdds",
  }),
  sanatizeSignin: request(app).post("/api/v1/auth/signin").send({
    email: "<script>code@gmail.com</script>",
    password: "kljsfdlmsdlsmdds",
  }),
  incorrectPassword: request(app).post("/api/v1/auth/signin").send({
    email: "duplicate@gmail.com",
    password: "kljsfdlmsdlsmdd",// incorrect password
  }),
  unAuthorrized: request(app).get("/api/v1/user/profile"),
  inValidToken: request(app).get("/api/v1/user/profile").set(
    'Cookie', ['token=dmlkjskmqljqlsdjlmkqMLKDQAFZA;'] // dummy token
  ),
};

