const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');



//const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const db = "mongodb://127.0.0.1:27017/e-blooddonor";

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('Db connection successful!');
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
