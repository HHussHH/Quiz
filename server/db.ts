import mysql from "mysql2";
//Подключение БД
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "quiz",
});
