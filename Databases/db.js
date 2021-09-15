const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.db_host,
        user:process.env.db_user ,
        password:process.env.db_password ,
        database:process.env.db
    },
    useNullAsDefault: true
});
knex.schema.createTable("Users", (table) => {
    table.increments('id').primary();
    table.string('Name')
    table.string('email')
    table.string('password');
})
    .then((data) => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Table Already Exist!!");
    })

module.exports = knex;