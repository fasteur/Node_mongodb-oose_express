const Movie = require('../models/movie'); 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async (req, res)=>{
    let movies = await Movie.find().sort({"fields.rank":1}).limit(10);
    console.log(movies);
    res.json(movies)

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.details = async (req,res)=>{
    let id = req.params.id; 
   
    let movies = await Movie.findOne({_id:id})
  
    res.json(movies)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.reviews=async(req,res)=>{
    let movies= await Movie.find().sort({'fields.title':1});
    let genres=[];
    let years=[];
    let i = 2000, current = parseInt(new Date().getUTCFullYear());
 
    await movies.forEach(async(movie)=>{
        await movie.fields.genres.forEach(async(genre)=>{
            if(genres.lastIndexOf(genre)=== -1){
                await genres.push(genre.trim());
            }
        });
    });
 
    for(i;i<= current;i++)
    {
        years.push(i);
    }
    res.json(movies, genres, years)
 }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//4. Action de controller qui gere la requete HTTP en AJAX
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
 exports.filter= async (req , res)=>{

     // récup des param passés par la requete 
     let genre = req.params.genre; 
     let year = req.params.year;
     let page = req.params.page - 1 ; 
     let numberOfResultsToDisplay = 12; 
     console.log(genre);
     console.log(year);
   
    // Récupération des films en DB, en fonction des critères passés par la requête
     let movies = await Movie
     .find(
         {
             $and : [
                { 'fields.genres': { $in : [genre] } } ,
                { 'fields.year': year }
            ] 
        }
     )
     .sort({ 'fields.title': 1 })
     .skip(numberOfResultsToDisplay*page) // 12 * 3 = 36 
     .limit( numberOfResultsToDisplay )
     console.log(movies);
  
     res.json(movies);// express expose json() sur req, sinon res.end(JSON.stignify(movies))
 }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
 exports.about = (req, res)=>{
     res.render('pages/about', { 
         title : 'About',
         h1 : 'About',
         isAuthenticated : req.isAuthenticated()
     })
 }