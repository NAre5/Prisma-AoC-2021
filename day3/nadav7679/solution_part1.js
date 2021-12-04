"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const data = fs
    .readFileSync(".\\input.txt", { encoding: "utf8" })
    .split("\r\n");
var res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (const bin of data) {
    const bytes = bin.split("");
    bytes.forEach((value, index) => {
        if (value === "0") {
            res[index] -= 1;
        }
        else {
            res[index] += 1;
        }
    });
}
var gamma = "";
var epsilon = "";
res.forEach((value, index) => {
    if (value === 0) {
        console.log("problem!");
    }
    else if (value > 0) {
        gamma += "1";
        epsilon += "0";
    }
    else {
        gamma += "0";
        epsilon += "1";
    }
});
console.log(gamma);
console.log(epsilon);
console.log(parseInt(gamma, 2));
console.log(parseInt(epsilon, 2));
fs.writeFileSync('.\\answer_part1', String(parseInt(gamma, 2) * parseInt(epsilon, 2)));
