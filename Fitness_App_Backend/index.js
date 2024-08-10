const app = require('./app');
const db = require('./config/db')
const port = 3000;

app.listen(port,()=>{
    console.log("connection listen on port http://localhost:"+port);
})