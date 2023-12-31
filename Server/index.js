import express from "express" 
import mongoose from "mongoose"
import helmet from "helmet" 
import cors from "cors"
import multer  from "multer"
import dotenv from "dotenv"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

 const __filename =fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);
 dotenv.config();
 const app= express();
 app.use(express.json());
 app.use(helmet());
 app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
 app.use(morgan("common"));
 app.use(bodyParser.json({limit:"30mb",extended:true}));
 app.use(cors());
 app.use("/assets",express.static(path.join(__dirname,'public/assets')));

 const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,file.originalname);
    }
 });
 const upload = multer({storage})


