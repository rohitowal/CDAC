import { createConnection } from "mysql";

export function createConnectionObject(){
    return createConnection({
        host: "localhost",
        user: "root",
        password: "cdac",
        database: "myDb"
    });
}

export function establishConnection(){
    createConnectionObject().connect((error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("connected to mysql database");
        }
    });
}
