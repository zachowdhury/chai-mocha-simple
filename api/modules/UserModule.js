import UserModel from '../models/UserModel'

export async function newUser( user_data ) {
    /** nex connect an dmake some  */
    const new_user = await UserModel.query()
    .insert({
        firsname:user_data.firsname,
        lastname:user_data.lastname,
        email:user_data.email,
    });
    
    return new_user;

}

export async function  updateUser(value){
    return;

}

export async function listUsers(){
return;
}

export async function getUserById(user_id){
return;
}