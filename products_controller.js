module.exports ={
    create: ( req, res, next ) => {
       const database = req.app.get('db'); 
       const { name, description, price, imageurl } =req.body;
       console.log('hey')
       database.create_product([name, description, price, imageurl])
       .then( ()=> res.status(200).send())
       .catch( (err)=> console.log(err));
    },

    getOne: ( req, res, next ) => {
        const database = req.app.get('db'); 
        const {params} = req; 

        database.read_product([params.id])
        .then (product => res.status(200).send( product ))
       .catch( (err)=> console.log(err));
     },

     getAll:( req, res, next ) => {
        const database = req.app.get('db'); 
        console.log('22---hit')
        database.read_products()
        .then(products => res.status(200).json( products ))
       .catch( (err)=> console.log(err));
     },

     update:( req, res, next ) => {
        const database = req.app.get('db');
        const {params, query} = req; 

        database.update_product([params.id, query.desc])
        .then( ()=> res.status(200).send())
       .catch( (err)=> console.log(err));
     },

     delete:( req, res, next ) => {
        const database = req.app.get('db');
        const {params} = req; 

        database.delete_product([params.id])
        .then( ()=> res.status(200).send())
       .catch( (err)=> console.log(err));
     }
};