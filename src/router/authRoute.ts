import express from "express";
import { register } from "controllers/authenticationController";

export default (router: express.Router) => {
  router.post('/auth/register', register);
};