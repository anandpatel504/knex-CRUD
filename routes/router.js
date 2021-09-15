const router = require("express").Router()
const knex = require('../Databases/db')
const bcrypt=require('bcrypt')

//get users
router.get('/', (req, res) => {
    knex.select('*').from('Users')
.then((data) => {
    console.log(data);
    res.json({data:data})
})
.catch((er) => {
    console.log(er);
    res.json({ "message": er })
});
})

//insert data
router.post('/', async(req, res) => {
    const userdata={
        Name: req.body.Name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password,10)
    }
    knex('Users').insert(userdata)

    .then((data) => {
        console.log(data);
        res.send("user successfully")
    })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });

})

//update user
router.put('/:id', (req, res) => {
    knex('Users').
        where('id', '=', req.params.id)
        .update({
            id:req.body.id, 
            Name: req.body.Name,
            email: req.body.email,
            password: req.body.password
        })
        .then((data) => {
            console.log(data);
            res.send("updated successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
})

//delete user
router.delete('/:id', (req, res) => {
    knex('Users')
        .where('id', req.params.id)
        .del()
        .then((data) => {
            console.log(data);
            res.send("deleted successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
})


module.exports = router