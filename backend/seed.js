// const mongoose = require("mongoose");
// const Usermodel = require('./models/Usermodel');
// const db = "mongodb+srv://tensorgo:tensorgo123@cluster0.cafd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const axios = require('axios')

// let resultData;
// let saveCounter = 0;

// mongoose.connect(db, {useNewUrlParser:true,}).then(() => console.log("Database Connection Successfull")).catch(error => console.log(error));

// const url = ['https://gorest.co.in/public-api/users?access-token=3f4a1873dc40443a4ba84cfd26e3a3bbbd7ba50a818ab90a109be144c3acb9ba']

// url.map(async url => {
//     try {
//         const response = await axios.get(url);
//         const json = await response.data.data;
//         resultData = [...json];

//         for(let i = 0; i< resultData.length; i++){
//             let usermodel = new Usermodel({
//                 id: resultData[i].id,
//                 name: resultData[i].name,
//                 email: resultData[i].email,
//                 gender: resultData[i].gender,
//                 status: resultData[i].status,
//             })

//             usermodel.save(() => {
//                 console.log("saved" + usermodel)
//                 saveCounter++;

//                 if (saveCounter === resultData.length){
//                     mongoose.disconnect().then(() => console.log('Saved Sucessfully and mongo disconnected')).catch(error => console.log(error));
//                 }
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })