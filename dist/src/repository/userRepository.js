"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../models/users");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.create = function (user) {
        return new Promise(function (res, rej) {
            user.save(function (err, userDB) {
                if (err)
                    rej(err);
                res(userDB);
            });
        });
    };
    UserRepository.prototype.findByEmail = function (email) {
        return new Promise(function (resolve, reject) {
            users_1.User.findOne({ email: email }, function (err, res) {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
    };
    return UserRepository;
}());
exports.default = UserRepository;
