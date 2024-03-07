import {v4 as uuidv4} from 'uuid';
let myuuid = uuidv4();
export interface IUser{
    id:string
    name:string
    desc:string
}

export const dummyUserList :IUser[]= [{
    id: myuuid,
    name:"kaka",
    desc:"aaaaaaaaaaa"
}]