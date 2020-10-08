const config = require('./conf.js');
const Twit = require('twit');

var T = new Twit(config);

const moment = require('moment');
function jour(){
    var d = moment().valueOf();
    var ecoule = d - 982134000000;
    ecoule /= 86400000;
    jours = Math.trunc(ecoule);
    return jours;
} 
function heure(){
    var d = moment().valueOf();
    var ecoule = d - 982134000000;
    console.log(ecoule);
    ecoule /= 86400000;
    jours = Math.trunc(ecoule);
    heures = Math.trunc((ecoule-jours) * 86400000);
    return Math.trunc(heures/3600000);
} 

    const interval = setInterval(() => {
        const date = moment().utcOffset(2).format("DD/MM/YYYY HH:mm");
	jours = jour();
        heures = heure();
        ans = Math.trunc(jours/365.5);
        T.post('account/update_profile', { description : "J'ai " + ans + " ans soit : " + jours + " jours et " + heures + " heures ", url : "https://github.com/Bronems/"}, desc);
    function desc(err, data){
        if(err){
            console.log(err);
        }else{
            console.log("new desc at : " + date);
        }
    }
    }, 1200000);

   
