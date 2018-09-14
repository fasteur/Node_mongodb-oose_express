
exports.index = (req,res)=>{
    let destinations = require(`${process.cwd()}/models/destinations.json`)
    res.render('pages/index',{
        title:'Welcome on our application',
        h1:'Bienvenue ! ',
        content:'Lorem ipsum dolor sit amet ...',
        hasFooter:true,
        hasHeader:true,
        hasSidebar:true,
        Footer: "Footer",
        Sidebar:'Sidebar',
        Header:'Header',
        destinations : destinations,
        about:'/about',
        value:'test',
        value2:'test'
    }) 
}
exports.about= (req,res)=>{
    res.render('pages/about',{
        title:'Welcome on our page about',
        h1:'Bienvenue ! ',
        content:'Lorem ipsum dolor sit amet ...',
        hasFooter:true,
        hasHeader:true,
        hasSidebar:true,
        Footer: "Footer",
        Sidebar:'Sidebar',
        Header:'Header',
        layout : `layouts/aboutLayout.hbs`,
        Home:'/'   
        
    })
}