const bcrypt = require('bcrypt');

const express = require ('express')
const app = express()

const users = [];
const mariadb = require('mariadb');
let cors = require('cors')

require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DTB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
    connectionLimit: 10, // Adjust the connection limit as needed
    acquireTimeout: 30000, // Increase the timeout value
  });


  app.use(express.json())
app.use(cors())


app.get('/user', async(req, res) =>{
    let conn;
    try {
        
        conn = await pool.getConnection();
       
        const rows= await conn.query('SELECT * FROM user');
       
        res.status(200).json(rows)
    }
   catch(err){
    console.log(err)
   }
})
app.post('/user', async (req,res) => {
    let conn;
     
    bcrypt.hash(req.body.mdp, 10)
        .then(async (hash) => {
            console.log("connexion launch")
            conn = await pool.getConnection();
            console.log('insert request launching')
            console.log(req.body);
            let request = 'INSERT INTO user (nom, email, mdp , admin, id) VALUES (?,?,?,?,?);'
            let rows = await conn.query(request, [req.body.nom, hash]);
            console.log(rows);
            res.status(200).json(rows.affectedRows)
        }
        ).catch((error) => res.status(500).json(error))

})

app.put('/user/:id', async(req, res) =>{
    const {id , nom , email , mdp, admin}= req.body  
    console.log(id, nom,email, mdp, admin);
    const adminValue = isNaN(parseInt(admin)) ? 0 : parseInt(admin);
     let conn;
     try {
         
         conn = await pool.getConnection();
        
         const rows= await conn.query("UPDATE user SET nom= ?, email=?, mdp=?, admin=? WHERE id=? ", [ nom , email, mdp, adminValue, Number(id)]);
        
         res.status(200).json(rows.affectedrow)
     }
    catch(err){
     console.log(err)
    }
 })
 
 app.delete('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const index = users.findIndex((user) => user.id === userId);
  
    if (index !== -1) {
      users.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  });

app.listen(4000, () => {
    console.log("server runs ")
})
