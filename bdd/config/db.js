// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin@cluster0.qh85h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("gestion_projet").collection("homeiot");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = {
    url: "mongodb+srv://admin:admin@cluster0.qh85h.mongodb.net/myFirstDatabase?retryWrites=true",
    database: "gestion_projet",
    imgBucket: "homeiot",
  };