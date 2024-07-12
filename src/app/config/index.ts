import dotenv from 'dotenv'

dotenv.config()
export default{
  db_pass:process.env.DB_PASS,
  port:process.env.PORT
}