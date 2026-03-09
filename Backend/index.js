const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let users = [];
let counter = 1;
let conn =null;
const initmySQL = async() =>{
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webdb',
    port: 8820
  });
}

app.get('/testdb-new', async(req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
});
/**
  GET /users สำหรับ get ข้อมูล user ทั้งหมด
  POST /user สำหรับเพิ่ม user ใหม่
  GET /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
  PUT /users/:id สำหรับ update ข้อมูล user ที่มี id ตรงกับที่ส่งมา
  DELETE /users/:id สำหรับลบ user ที่มี id ตรงกับที่ส่งมา
 */

//path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
app.get('/users',async (req,res)=>{
   if (!conn) await initmySQL();
   const results = await conn.query('SELECT * FROM users');
   res.json(results[0]);
});
const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }
    return errors;
}
//path = POST /user สำหรับเพิ่ม user ใหม่
app.post('/users',async (req,res)=>{
try {
  let user = req.body;
  const errors = validateData(user);
  if (errors.length > 0) {
    throw {
      message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      errors: errors
    }
  }
  const results = await conn.query('INSERT INTO users SET ?',user);
  console.log('Insert result:', results);
  res.json({
      message: 'User created successfully',
      data: results[0]
    });
}catch (error) {
  const errormessage = error.message || 'Error creating user';
  const errors = error.errors || [];
  console.error('Error creating user:', error.message);
  res.status(500).json({
      message: errormessage,
      errors: errors,
    });
  }
});

//path = GET /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/users/:id',async (req,res)=>{
  try{
    if (!conn) await initmySQL();
  let id = req.params.id;
  const results = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
  if(results[0].length == 0){
    throw{statusCode: 404, message: 'User not found'}
  }
  res.json(results[0][0]);
}catch (error) {  
  console.error('Error fetching user:', error);
  let statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    message: 'Error fetching user',
    error: error.message
  });
  }
});

//path = PUT /users/:id สำหรับ update ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id',async(req,res)=>{
  try{
    if (!conn) await initmySQL();
  let id = req.params.id;
  const results = await conn.query('UPDATE users SET ? WHERE id = ?', [req.body, id]);
  if(results[0].affectedRows === 0){
    throw{statusCode: 404, message: 'User not found'}
  }
  res.json({
    message: 'User updated successfully'
  });
}catch (error) {  
  console.error('Error fetching user:', error);
  let statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    message: 'Error updating user',
    error: error.message
  });
  }
});


//path = DELETE/users/:id
app.delete('/users/:id',async(req,res)=>{
  try{
    if (!conn) await initmySQL();
  let id = req.params.id;
  const results = await conn.query('DELETE FROM users WHERE id = ?', [id]);
  if(results[0].affectedRows === 0){
    throw{statusCode: 404, message: 'User not found'}
  } 
  res.json({
    message: 'User deleted successfully'
  });
}catch (error) {  
  console.error('Error deleting user:', error);
  let statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    message: 'Error deleting user',
    error: error.message
  });
  }
});

//path = POST /users-delete สำหรับลบ user โดยใช้ firstname และ lastname
app.post('/users-delete',async(req,res)=>{
  try{
    if (!conn) await initmySQL();
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const results = await conn.query('DELETE FROM users WHERE firstname = ? AND lastname = ?', [firstname, lastname]);
    if(results[0].affectedRows === 0){
      throw{statusCode: 404, message: 'User not found'}
    } 
    res.json({
      message: 'User deleted successfully'
    });
  }catch (error) {  
    console.error('Error deleting user:', error);
    let statusCode = error.statusCode || 500;
    res.status(statusCode).json({
      message: 'Error deleting user',
      error: error.message
    });
  }
});

app.listen(port, async ()=>{
  await initmySQL();
  console.log(`Server is running on port ${port}`);
});