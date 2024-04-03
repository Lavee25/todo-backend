const authRoutes = require('../routes/authRoutes')
const toDoRoutes = require('../routes/toDoRoutes')
 
 
 module.exports=(app)=>{
    

    app.get('/',(req,res)=>{res.status(200).send('Welcome')});
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/toDo', toDoRoutes);
   
    app.get('*',(req,res)=>{res.status(400).send('Route you are looking for not exists')});
    
    
 
 }