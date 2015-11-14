var connectingString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/university';
module.exports =  {
    connect_url : connectingString
}
