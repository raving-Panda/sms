// import { getToken } from 'firebase/messaging';
// import { token } from '$lib/fireb.js';
// export const load = (async ({ params, fetch, platform,cookies }) => {
//   try{
//     const cooke = "cookie"//cookies.get('user',path="/");
//     if(!cooke){
//       console.error("could not get cookie");
//       const t=token()
//       // cookies.set('user',t,path="/")
//       const value = await platform.env.smskv.put("user1",t);
//       return {resp:t}
//     }else{
//         return {resp:"null"}
//     }
//   }catch (err) {
//         console.error(`Fetching token returned error:`, err);
//         const errorMessage =
//           err instanceof Error
//             ? err.message
//             : "An unknown error occurred";
//         return {resp:errorMessage}
//   }
// }) ;