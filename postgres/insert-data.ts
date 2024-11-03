import { getClient } from "./utils";
import { Client } from "pg";

async function createEntries() {
    const client = await getClient();
    
    try {
        const insertUserText: string = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
        const userValues: Array<string> = ['abcd@example.com', 'efghpassword'];
        
        let response = await client.query(insertUserText, userValues);
        
        const insertTodoText: string = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
        const todoValues: Array<string | boolean | number> = ['Buy groceries', 'Milk, bread, eggs', response.rows[0].id, false];
        
        await client.query(insertTodoText, todoValues);
        console.log("Entries created!");
    } catch (error) {
        console.error("Error creating entries:", error);
    } finally {
        await client.end();
    }
}

createEntries();
