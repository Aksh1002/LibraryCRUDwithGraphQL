const express= require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose =require('mongoose');
const PORT=4000

const app= express();
mongoose.connect('mongodb+srv://admin:admin@gql-ninja.ud5utf3.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.once('open',()=>{
    console.log("DB connection established")
});

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));


app.listen(PORT,()=>{
    console.log(`now listening to ${PORT}`)
});