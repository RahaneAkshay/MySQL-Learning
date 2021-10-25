import mysql from'mysql2';
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'tutorial',
    port:3001,
    password:'NEW_USER_PASSWORD',
  
})

export default pool.promise();