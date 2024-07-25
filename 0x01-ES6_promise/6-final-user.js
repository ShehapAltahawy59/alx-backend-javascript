import signUpUser from 4-"user-promise.js"
import uploadPhoto from "5-photo-reject.js"
import { resolve } from "path"
export default function handleProfileSignup(firstName,lastName,fileName ){
    return new Promise
    .allSettled([(signUpUser(firstName,lastName),uploadPhoto(fileName))])
    .then((res)=>(
        res.map((o)=>({
        status: o.status,
        value: o.status === "fulfilled" ? o.value : String(o.reason),
        }))
        
    ));
}
