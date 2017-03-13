import * as redis from "redis";
const client = redis.createClient();

 class CreateRedis {    
    static connectRedis = (callback) => {
        client.on("connect", () => {
            console.log("redis connected");
            callback(null, {result: "connected"});
        });
        client.on("error", (error) => {
            console.log("error" + error);
            callback(error, null);
        });
    };
   
}

export { CreateRedis, client }