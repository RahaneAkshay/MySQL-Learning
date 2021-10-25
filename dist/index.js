"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var student_routes_1 = require("./routes/student.routes");
var app = express_1.default();
var PORT = 3000;
app.use(express_1.default.json());
app.use('/student', student_routes_1.router);
app.listen(PORT, function () {
    console.log("server started at port " + PORT);
});
