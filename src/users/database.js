    import mysql from 'mysql2/promise'; 

     export async function fetchData() {
      const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'users'
      });

      try {
        const [rows, fields] = await pool.query("SELECT * FROM users");
        console.log('Данные из таблицы users:');
        console.log(rows);
        console.log('Метаданные полей:');
        console.log(fields); 
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      } finally {
        await pool.end(); 
      }
    }

    fetchData();
    
