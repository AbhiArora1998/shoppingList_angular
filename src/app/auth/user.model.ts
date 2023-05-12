// now we wanna have all the meta data for the user and
// we need to see if the token has expired or not 
export class UserModel{
    constructor(public email:string,public id:string, private _token:string, private _tokenExpirationDate:Date) {
         
    }
    
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null
        }
        return this._token
    }
 }