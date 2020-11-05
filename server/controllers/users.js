const express = require('express');
const users = require('../models/users');
const router = express.Router();
router.get('/', (req, res, next) => {
        //throw {status: 501, message: "Error"} 
        //res.send( await users.getAll() );
        //console.log("Finnished get users")
        users.getAll().then(x=> res.send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        users.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        users.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        //res.send( users.search(req.query.q) );
        users.search(req.query.q).then(x=> res.send(x))
        .catch(next);
    })
    .post('/', (req, res, next) => {
        //const newUser = users.add(req.query.name, req.query.age)
        //users.add(req.query.name, req.query.age).then(newUser=> {
            //res.send( newUser );
        users.add(
            req.body.FirstName,
            req.body.LastName, 
            req.body.DOB, 
            req.body.Password, 
            6 /* User */, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        users.update( req.params.id,
            req.body.FirstName,
            req.body.LastName, 
            req.body.DOB, 
            req.body.Password, 
            6 /* User */, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        users.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
    //.get('/rand', (req, res, next) => {
        //const someVal = users.rand();
        //res.send({someVal});
        // res.send is like the callback function
        //users.rand()
        //.then(someVal => res.send({someVal}))
        //.catch(next);
    //})
module.exports = router; 