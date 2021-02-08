import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

/**
 * To Create API's next-connect package needs to be installed 
 * for Mongo DB operations, install - mongodb
 * This is for the GET api at /api/favourites
 * when someone accesses /api/favourites then it will return a JSON list containing all the favourites
 */

// update the DATA_BASE_URL with your mongo db url
const client = new MongoClient("DATA_BASE_URL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  console.log("DB connectiong ... ");
  if (!client.isConnected()){
    try {
       await client.connect();
       console.log("Db connected !!");
    }
    catch(e) {
      console.log(e);
    }

  }
  req.dbClient = client;
  req.db = client.db("MONGO_DB_NAME");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {

    let favouritesList = await req.db.collection('favourites').find({}).toArray();
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favouritesList);

});

export default handler;