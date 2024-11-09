const urlEndpoint = import.meta.env.VITE_IMAGEKIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY; 

const authenticator = ()=>{
    return new Promise(( resolve, reject ) => {
        resolve({signature,token,expiry})
    })
};
