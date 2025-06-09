import { json } from '@sveltejs/kit';
export const load =async ({ params, fetch, platform }) =>{
      try {
        // await platform.env.smskv.put("user_2", "disabled");
        // const valuet = await platform.env.smskv.put("key", `Write attempt #0`);
        const value = await platform.env.smskv.get("key");
        // const valuett = await platform.env.smskv.put("key", `Write attempt #1`);
        if (value === null) {
          return {"key":"Value not found"};
        }
        return {"key":value};
      } catch (err) {
        console.error(`KV returned error:`, err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An unknown error occurred when accessing KV storage";
        return {"key":errorMessage}
      }
   }
