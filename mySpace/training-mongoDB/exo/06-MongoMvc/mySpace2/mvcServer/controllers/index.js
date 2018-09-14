
const Fs= require('fs')
const Util = require('util')
const Read = Util.promisify(Fs.readFile);


const Movie = require(`${process.cwd()}/models/movie`);


module.exports = async (req,res)=>{
    Read(`${process.cwd()}/views/index.html`,{encoding: 'UTF-8'})
    .then(async(result) =>{
      //--Request 1-----
       response_1 = await Movie.find(
           {},
           {"fields.title":1}
        ).sort({'fields.title':-1}).limit(10)
        
           
            let template = '';
            response_1.forEach((movie)=>{
                template += `<li>${movie.fields.title}</li>`
            })
            let output = result.replace(/{{LIST}}/g,template)
          
        //--Request 2-----
       response_2 = await Movie.find(
        {},
        {"fields.actors":1},
        {"fields.title":1}
     ).sort({'fields.title':-1}).limit(10)
     
        
         let template2 = '';
         response_2.forEach((movie)=>{
             template2 += `<li>${movie.fields.actors}</li>`
         })
         let output2 = output.replace(/{{LIST2}}/g,template2).replace(/{{LIST_TITLE_1}}/g,'des acteurs:')
         
          //--Request 3-----
       response_3 = await Movie.find(
        {},
        {}).sort({'fields.year':-1}).limit(15)
     
        
         let template3 = '';
         response_3.forEach((movie)=>{
             template3 += `<li>${movie.fields.year}</li>`
         })
         let output3 = output2.replace(/{{LIST3}}/g,template3).replace(/{{LIST_TITLE_3}}/g,'des dates:')
         
          //--Request 4-----
       response_4 = await Movie.find(
        {},
        {}).sort({'fields.rank':1}).limit(15)
     
        
         let template4 = '';
         response_4.forEach((movie)=>{
             template4 += `<li>${movie.fields.rank}</li>`
         })
         let output4 = output3.replace(/{{LIST4}}/g,template4).replace(/{{LIST_TITLE_4}}/g,'des rangs:')
        
          //--Request 5-----
       response_5 = await Movie.find(
        {"fields.actors":'Sharlto Copley'},
        {}).limit(15)
     
        
         let template5 = '';
         response_5.forEach((movie)=>{
             template5 += `<li>${movie.fields.title}</li>`
         })
         let output5 = output4.replace(/{{LIST5}}/g,template5).replace(/{{LIST_TITLE_5}}/g,'Sharlto Copley:')
         
          //--Request 6-----
       response_6 = await Movie.find(
        {"fields.genres":'Comedy'},
        {}).limit(10)
     
        
         let template6 = '';
         response_6.forEach((movie)=>{
             template6 += `<li>${movie.fields.title}</li>`
         })
         let output6 = output5.replace(/{{LIST6}}/g,template6).replace(/{{LIST_TITLE_6}}/g,'des comédies:')
         
          //--Request 7-----
       response_7 = await Movie.find(
           {$and : [{"fields.actors":"Jennifer Lawrence"},{"fields.actors":"Matt Damon"}]},
            {}).limit(10)
     
        
         let template7 = '';
         response_7.forEach((movie)=>{
             template7 += `<li>${movie.fields.title}</li>`
         })
         let output7 = output6.replace(/{{LIST7}}/g,template7).replace(/{{LIST_TITLE_7}}/g,'des films dans lesquels ont joué conjointement Jennifer Lawrence et Matt Damon:')
        
          //--Request 8-----
          
       response_8 = await Movie.find(
        {"fields.year":{$in:[2002,2003,2004,2005,2006,2007,2008]}},
            {}).limit(10)
     
        
         let template8 = '';
         response_8.forEach((movie)=>{
             template8 += `<li>${movie.fields.title}</li>`
         })
         let output8 = output7.replace(/{{LIST8}}/g,template8).replace(/{{LIST_TITLE_8}}/g,'des films sortis entre 2002 et 2008:')
         res.writeHead(200,{'Content-type':'text/html'})
         res.end(output8)
         
     
    })
    .catch((error)=>console.log(error))
}