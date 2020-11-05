//const data = [{ name: 'Charles', age: 24}, { name: 'John', age: 22}]
const mysql = require('./mysql');

async function getAll(){
    //throw {status: 501, message: "Error"} 
    //await Promise.resolve();
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Users`);
}

async function add(FirstName, LastName, DOB, Password, User_Type){
    const sql = 'INSERT INTO `Users` (`created_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`) VALUES ? ;';
    const params = [[new Date(), FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [params]);
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM Users WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows;
}

async function update(id, FirstName, LastName, DOB, Password, User_Type){
    const sql = 'UPDATE `Users` SET ? WHERE `id` = ?;';
    const params = { created_at: new Date(), FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `Users` WHERE `Users`.`id` = ?';
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = {rand, getAll, add, search: async q => data.filter(x=> x.name == q)}






















// callback helps when function takes a long time
function rand(/*cb*/) {
    var someVal = 0
    //const p = new Promise((resolve, reject) =>{
    //    setTimeout(() => {
            for(let index = 0; index < 9999 * 999; index++) {
                someVal = index * Math.random();
            } if(someVal < 9999 * 999 * .5) {
                throw /*reject(*/{status: 501, message: "Error"} //)
            }
            //cb(someVal)
            //resolve(someVal);
       // }, 1);
   // })
    return someVal;
}