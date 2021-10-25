"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var pool = mysql2_1.default.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tutorial',
    port: 3001,
    password: 'NEW_USER_PASSWORD',
});
exports.default = pool.promise();
