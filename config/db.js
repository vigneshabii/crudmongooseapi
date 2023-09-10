const mongoose=require('mongoose');
const DB_URI='mongodb://127.0.0.1:27017/vignesh';

async function getDatabase() {
    try {
        await mongoose.connect(DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('Database Connected')
    } catch(err) {
        console.log('Connection Error', err)
    }
}
getDatabase();