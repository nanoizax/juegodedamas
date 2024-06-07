
const server = require('http').createServer();
const winston = require('winston');
const {  format } = require('winston');

const { combine, timestamp, label, prettyPrint } = format;
const logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Salida de Ing.Carlos Luiggy ' }),
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'stderr.log' }),
  ],
});

logger.log({
  level: 'info',
  message: 'INICIO'
});

const express = require('express')
const app = express()
const cors = require('cors');



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  // password : 'eeuH3^813_k6K88X922',
  password : '',
  database : 'tajikfsv_damas'
});


const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
io.on('connection', client => {

  // logger.log({
  //   level: 'info',
  //   message: JSON.stringify(client)
  // });
  
// consultamos las salas  para poder ingresar el usuario a los rooms y pueda escuchar los eventos

let idusuario= client.handshake.auth.iduser; 
console.log("cliente conectado -->"+ idusuario)


// comunicacion de  cambio de jugada en tiempo real
client.on("emitircambioturnosalasocket",function(data){


  // modificamos valores de la sala 
  let sql=`update  \`salas\` set piezas='${JSON.stringify(data.piezas)}'  , gmovecount=${data.gMoveCount} WHERE  id_sala  ='${data.current_sala_id}'`   

  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
  
         
        io.to("sala "+data.current_sala_id).emit("emitircambioturnosalasocket",data)
        
      } });  
      
    })
    
    client.on("endGame",function(data){

      let sql =``

      if(data.turnoBlancas){

        sql=`update  \`salas\` set winblack=winblack+1  WHERE  id_sala  ='${data.current_sala_id}'`   
      }else{
        sql=`update  \`salas\` set winwhite=winwhite+1  WHERE  id_sala  ='${data.current_sala_id}'`   


      }


      connection.query(sql, async function (error, results, fields) {
        if (error) {
          throw error;
        }else {
      
             
          io.to("sala "+data.current_sala_id).emit("endGame",data)

            
          } });  


    
})

client.on("ingresoonlinesala",function(data){
  
let sql=`SELECT id_sala FROM \`salas\` WHERE  true and id_sala  ='${data.id_sala}'  and ( id_user_blanca ='${data.id_user}' or id_user_negra='${data.id_user}');` 
// console.log(sql);

connection.query(sql, async function (error, results, fields) {
  if (error) {
    throw error;
  }else {

    
    if(results!=undefined && results !=null && results.length>0  && results[0].id_sala==data.id_sala){
       
      client.join("sala "+data.id_sala)
      io.to(client.id).emit("ingresoonlinesala_exitoso" ,{id_sala:data.id_sala})
      
    }else{

      io.to(client.id).emit("ingresoonlinesala_fail" ,{id_sala:data.id_sala})
    }

  } });  
  
  console.log("ingresoonlinesala"+JSON.stringify(data))
})
client.on("ingresoonlinesala_espectador",function(data){
  
  client.join("sala "+data.id_sala)
      io.to(client.id).emit("ingresoonlinesala_espectador_exitoso" ,{id_sala:data.id_sala})

})


  // console.log((client.id))
  // console.table((client.handshake.auth))
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});

  // salida de consola de creacion de sala
  io.of("/").adapter.on("create-room", (room) => {
    console.log(`room ${room} was created`);
  });
  
  // salida de consola de inreso de sala
io.of("/").adapter.on("join-room", (room, id) => {
  console.log(`socket ${id} has joined room ${room}`);
});

server.listen(3001,()=>{
  console.log("socket corriendo en el 3001")
});



 // Use CORS middleware
 app.use(cors());

 const corsOptions = {
  origin: '*',//(https://your-client-app.com)
  optionsSuccessStatus: 200,
};

app.listen(3000,cors(corsOptions),()=>{
  // logger.log({
  //   level: 'info',
  //   message: 'escuchando api 3000!'
  // });
  
console.log("servidor corriendo  en el 3000")

})

 
//**************************** */ logueo inicio 

app.get('/damasbackv2/crearusuario',async function (req, res) {
  
  let variables =req.query
  

  // connection.connect();

  let sql=` INSERT INTO \`users\`( \`usuario\`, \`contrasena\`) VALUES ('${variables.usuario}','${variables.pass}')  ON DUPLICATE KEY UPDATE usuario=usuario ;` 
 connection.query(sql, async function (error, results, fields) {
  if (error) {
    throw error;
  }else {

    res.send(results)
  } });

// connection.end();

 
})
app.get('/damasbackv2/checkusuario',async function (req, res) {
  
  let variables =req.query
  

  // connection.connect();

  let sql=`SELECT * FROM \`users\` WHERE 1 and usuario='${variables.usuario}' and contrasena='${variables.pass}' and deleted_at is null ;` 



 connection.query(sql, async function (error, results, fields) {
  if (error) {
    throw error;
  }else {

    res.send(results)
  } });

// connection.end();

 
})


//***************************** */ logueo fin 

//***************************** */ salas inicio 

app.get('/damasbackv2/checksalas',async function (req, res) {
  
  let variables =req.query
  
  
  // connection.connect();
  
  let sql=`SELECT * FROM \`salas\` WHERE 1  and deleted_at is null ;` 
  
  
  
  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
      
      res.send(results)
    } });
    
    // connection.end();
    
    
  })
  
  
app.get('/damasbackv2/checksalasbyid',async function (req, res) {
  
  let variables =req.query
  
  
  // connection.connect();
  
  let sql=`SELECT *, (SELECT usuario from users where id_user= id_user_blanca) as whiteusername, (SELECT usuario from users where id_user= id_user_negra) as blackusername FROM \`salas\` WHERE 1 and deleted_at is null and id_sala=${variables.id_sala}; ` 
  
  
  
  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
      
      res.send(results)
    } });
    
    // connection.end();
    
    
  })
  
  
  
  app.get('/damasbackv2/insertsala',async function (req, res) {
    
    let variables =req.query
    
    
    // connection.connect();
    let piezas=JSON.stringify(variables.piezas)
    let nombre =(variables.nombre!=undefined && variables.nombre!=null ) ?variables.nombre:' Nueva Sala ';

    let id_user_blanca ;
    let id_user_negra ;

if(variables.color!=undefined && variables.color != null ){

    if(variables.color=='blanca'){
      id_user_blanca=variables.id_user        
      id_user_negra= null        
    }else if(variables.color=='negra'){
      id_user_negra=variables.id_user        
      id_user_blanca= null  
    }

}

  let sql=` INSERT INTO \`salas\`( \`nombre\`, \`id_user_blanca\`, \`id_user_negra\`, \`created_at\`,piezas) VALUES ('${nombre}',${id_user_blanca},${id_user_negra},now(),'${piezas}')  ;` 
  
  // console.log('jjjjj'+sql)
  //  res.send(sql)
  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
      
      res.send(results)
    } });
    
    // connection.end();
    
    
  })
  
  
  app.get('/damasbackv2/ingparticipantesala',async function (req, res) {
    
    let variables =req.query;

  let sql;  
  if(variables.color!=undefined && variables.color != null ){
    if(variables.color=='blanca'){
      
      sql=` update salas set  id_user_blanca = ${variables.id_user}  where id_sala=${variables.id_sala}`;
    }else if(variables.color=='negra'){
       
      sql=` update salas set  id_user_negra = ${variables.id_user}  where id_sala=${variables.id_sala}`;
    }
    
  }
  // res.send(sql)

  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
      
      res.send(results)
    } });
    

    
    
  })
  app.get('/damasbackv2/ingparticipantesala_existente',async function (req, res) {
    
    let variables =req.query;

  let sql;  
  
  // sql =` 
  // SELECT * , CASE WHEN id_user_blanca is not null then 'blanca' when id_user_negra is not null then 'negra' else 'noparticipaaun' end as color  
  // FROM \`salas\` WHERE (id_user_blanca ='${variables.id_user}' or id_user_negra ='${variables.id_user}') and id_sala =${variables.id_sala};
  // `
  sql =` 
  SELECT * , CASE WHEN id_user_blanca ='${variables.id_user}' then 'blanca' when id_user_negra ='${variables.id_user}' then 'negra' else 'noparticipaaun' end as color  
  FROM \`salas\` WHERE (id_user_blanca ='${variables.id_user}' or id_user_negra ='${variables.id_user}') and id_sala =${variables.id_sala};
  `
  // res.send(sql)

  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
      
      res.send(results)
    } });
    

    
    
  })
  app.get('/damasbackv2/ingparticipantesala_existente_espectador',async function (req, res) {
    
    let variables =req.query;

  let sql;  
  
  // sql =` 
  // SELECT * , CASE WHEN id_user_blanca is not null then 'blanca' when id_user_negra is not null then 'negra' else 'noparticipaaun' end as color  
  // FROM \`salas\` WHERE (id_user_blanca ='${variables.id_user}' or id_user_negra ='${variables.id_user}') and id_sala =${variables.id_sala};
  // `
  sql =` 
  SELECT * 
  FROM \`salas\` WHERE   id_sala =${variables.id_sala};
  `
  // res.send(sql)

  connection.query(sql, async function (error, results, fields) {
    if (error) {
      throw error;
    }else {
      
      res.send(results)
    } });
    

    
    
  })
  
  //***************************** */ salas fin 