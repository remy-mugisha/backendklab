const express=require('express');
const dotenv=require('dotenv');
const cors = require('cors');
// const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const postRoute=require('./routes/post');
// const catRoute=require('./routes/category');
const messageRoute=require('./routes/message');
const estateRoute=require('./routes/realEstate')
const swaggerDocs = require('./swagger/swagger-doc');
const dbConnect = require('./database/db');
const port = process.env.PORT;
const app=express();
dotenv.config();
app.use(cors({
    origin:'*',
    optionsSuccessStatus: 200
}));
app.use(express.json());
dbConnect();
// app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/blog',postRoute);
app.use('/api/estate',estateRoute);
// app.use('/api/categories',catRoute)
app.use('/api/messages',messageRoute);

app.listen(port,()=>{
    console.log('port is on');
})

swaggerDocs(app);
