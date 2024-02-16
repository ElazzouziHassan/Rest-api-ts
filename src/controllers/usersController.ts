import { getUsers } from "database/users";
import express  from "express";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try{
        const users = await getUsers;
        return res.status(200).json(users);
    }catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
};
  
export const deleteUser = async () => {
    // delete user code
}
  
export const updateUser = async () => {
    // update user code
}