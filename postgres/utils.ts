import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export async function getClient(): Promise<Client> {
    const client: Client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false}
    });
    await client.connect();
    return client;
}

