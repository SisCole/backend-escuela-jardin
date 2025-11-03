import dotenv from 'dotenv';
dotenv.config();

import { PORT } from './config/config';
import { connectDB } from './db/connection';
import app from "./main";

(async () => {
    try {
        
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
        
    } catch (error) {
        console.log("Server is not running: ", error);
        process.exit(1);
    }
})();
