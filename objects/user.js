"use strict";
var User = (function () {
    function User(username, address, pass, fName, lName, email) {
        this.username = username;
        this.address = address;
        this.pass = pass;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.getPass = function () {
        return this.pass;
    };
    User.prototype.getFirstName = function () {
        return this.fName;
    };
    User.prototype.getLastName = function () {
        return this.lName;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    return User;
}());
exports["default"] = User;
