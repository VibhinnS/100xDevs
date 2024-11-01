import { Client } from "pg";

export async function getClient(): Promise<Client> {
    const client: Client = new Client("postgresql://postgres:nAl9txA3KaFpl7Ot@cannily-thorough-dabchick.data-1.use1.tembo.io:5432/postgres")
    await client.connect();
    return client;
}