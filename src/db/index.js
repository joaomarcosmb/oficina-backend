import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "todoapp_db",
});

export default pool;
