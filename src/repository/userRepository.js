import User from "../models/users";

function UserRepository() {
    function create({ name, password, email }) {
        const user = new User({
            email,
            password,
            name,
        })
        
        return new Promise((res, rej) => {
            user.save((err, userDB) => {
                if (err) {
                    rej(err);
                }
    
                res(userDB)
            })
        })
    }

    function findByEmail(email) {
        return new Promise(async (resolve, reject) => {
            User.findOne({ email }, (err, res) => {
                if(err) throw err;
                resolve(res);
            })
        })
    }

    return {
        create,
        findByEmail
    }
}

export default UserRepository;