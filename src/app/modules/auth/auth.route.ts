import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "../user/user.validation";
import { AuthValidation } from "./auth.validation";

const authRoute = Router();

authRoute.post('/register', validateRequest(UserValidations.userValidationSchema), AuthControllers.register)

authRoute.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.login)

export const AuthRoutes= authRoute;