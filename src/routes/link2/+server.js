// src/routes/api/data/+server.js
import { json } from '@sveltejs/kit';
export async function GET({platform }) {
    const handler = await platform.env.smskv.get("handler");
      try {
        // await platform.env.smskv.put("user_2", "disabled");
        const value = await platform.env.smskv.get("key");
        if (value === null) {
          return new Response("Value not found", { status: 404 });
        }
        return new Response(value);
      } catch (err) {
        console.error(`KV returned error:`, err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An unknown error occurred when accessing KV storage";
        return new Response(errorMessage, {
          status: 500,
          headers: { "Content-Type": "text/plain" },
        });
      }
    }
