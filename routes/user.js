import { Router } from "express";
import { createUser , deleteUser, callAllUsers} from "../controllers/user.js";


const routerUser = Router();



routerUser.post('/', createUser)

routerUser.get('/',  callAllUsers)

routerUser.delete(`/:id`, deleteUser)



export {
    routerUser
}