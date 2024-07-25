import {uploadPhoto ,createUser} from "utils.js"
export default async function asyncUploadUser (){
    const photo = await uploadPhoto()
    const user = await createUser()

    let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;

}
