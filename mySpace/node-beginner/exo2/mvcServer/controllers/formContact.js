'use strict';

const Fs= require('fs')
//const Promisify = require('es6-promisify').promisify;//Util.promisify -->prend une fction qui ne retourne pas une promesse et la modifie afin qu'elle retourne une prommesse, ce qui permettra de faire un 'then'
// const Read = Promisify(Fs.readFile);
const EventHandler = require(`${process.cwd()}/helpers/event-handler`);
const ViewBuilder = require(`${process.cwd()}/helpers/view-builder`);
const nodemailer = require('nodemailer');
module.exports = (req,res)=>{
    // console.log(req.method);
    if(req.method ==='GET'){
        ViewBuilder(req, res, 200);
}else if(req.method ==='POST'){
        let data = '';        
        // Récupération des paquets de la requête
        req.on('data', (chunk) => {
            data += chunk;              
        });
        // Renvoi d'une réponse quand tous les paquets ont été reçus
    req.on('end', async () => {
        if(!process.argv[2] || process.argv[2] !== '--demo'){let values = [];
            await data.split('&').forEach((item)=>{
            values.push(item.split('='));
            })
            // console.log(values);



        nodemailer.createTestAccount((err, account) => {

            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass // generated ethereal password
                }       
            });

        // setup email data with unicode symbols
            let mailOptions = {
                from: '"' + decodeURIComponent(values[0][1]) + ' 👻" <' + decodeURIComponent(values[1][1]) + '>', // sender address
                to: 'asteur.florian@gmail.com', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: values[2][1], // plain text body
                html: values[2][1] // html body
            };

        // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }else 
                {
                  EventHandler.emit('log', `Mail sent to ${decodeURIComponent(values[1][1])} at ${new Date()}\n`);
                  ViewBuilder(req, res, 200);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
    });}else 
        {
          ViewBuilder(req, res, 200);
        }
            
    });
       
    }
}

