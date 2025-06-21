import { getToken } from 'firebase/messaging';
// import { token } from '$lib';
import { userState } from '$lib/state.svelte.js';
export const load = (async ({ params, fetch, platform,cookies }) => {

    
  try{
    const cooke = userState.token;
    if(!cooke){
      console.error("could not get cookie");
      let t = "dummy token";
      // try{t=await token()}catch{}
      // cookies.set('user',t,path="/")
    //   const value = await platform.env.smskv.put("user1",t);
    
      return {resp:t}
    }else{
        return {resp:cooke}
    }
  }catch (err) {
        console.error(`Fetching token returned error:`, err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An unknown error occurred";
        return {resp:errorMessage}
  }
}) ;