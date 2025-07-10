const mongoose = require("mongoose")
// KpzMBsJFIQN3Lbwu
function connectToDB(){
    mongoose.connect("mongodb+srv://shevangpalgam:M3aMJhYcnSVLTJp7@clustercohort.bv3hslo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCohort")
    .then(()=>{
        console.log("connected to db");
        
    })
}
module.exports = connectToDB