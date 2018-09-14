const Fs= require('fs')
const Util = require('util')
// const Read = Util.promisify(Fs.readFile);
// const Book = require(`${process.cwd()}/models/librairie`);
// const Add = require(`${process.cwd()}/helpers/addBook.js`)
// const findTitle = require(`${process.cwd()}/helpers/find.js`)
// const deleteTitle = require(`${process.cwd()}/helpers/remove.js`)
exports.index = (req,res)=>{
    console.log('clg de req.body', req.body);
    res.sendFile(`${process.cwd()}/views/index.html`)
    
    
}
exports.delete = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/delete.html`)
}
exports.edit = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/edit.html`)
    
}
exports.add = (req,res)=>{
    console.log('clg de req.body', req.body);
    res.sendFile(`${process.cwd()}/views/add.html`)
}