const {catchedAsync} =require('../utils')


module.exports={
    createUser: catchedAsync( require('./user/createUser')),
    loginUser: catchedAsync( require('./user/loginUser')),
    
    createRecord:catchedAsync(require('./records/createRecord'))
}