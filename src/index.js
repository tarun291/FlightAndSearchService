const express=require('express');

const bodyParser=require("body-parser");

const { PORT }=require('./config/serverConfing');

const CityRepository=require('./repository/city-repository');


const setupAndStartServer=async ()=>{
    // create the express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        const repo=new CityRepository();
        // console.log(repo.createCity({name:"Agra"}));
        repo.deleteCity({cityId:1});
    })
}
setupAndStartServer();