require('dotenv').config();

module.exports={
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://admin:admin0@mindful.1dep9ra.mongodb.net/',
    PORT:process.env.PORT || 3000
}