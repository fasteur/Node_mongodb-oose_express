exports.index = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/index.html`)
    
}
exports.about = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/about.html`)
    
}
exports.services = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/services.html`)
    
}
exports.contact = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/contact.html`)
    
}