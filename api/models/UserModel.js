import { Model } from 'objection';

export default class UserModel extends Model{
    
    static tableName = 'blog_users';
    static jsonSchema = { 
        type:'object',
        required:[
            'firstname',
        ],
        properties: {
            id: {type:'integer'},
            firstname:{type:'string'},
            lastname:{type:'string'},
            email:{type:'string'},
            createde_at:{type:'string'},
            updated_at:{type:'string'},
        }
    };

}                   