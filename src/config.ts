import dotenv from 'dotenv';
import bunyan from 'bunyan';


dotenv.config({});

class Config{
    public DATABASE_URL: string | undefined;
    public JWT_TOKEN: string | undefined;
    public NODE_ENV: string | undefined;
    public SECRETE_KEY_ONE: string | undefined;
    public SECRETE_KEY_TWO: string | undefined;
    public CLIENT_URL: string | undefined;
    public REDIS_HOST: string | undefined;


    private readonly DEFAULT_DATABASE_URL = 'mongodb://localhost:27017/khelnehaina-backend'

    constructor(){
        this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
        this.JWT_TOKEN = process.env.JWT_TOKEN || '1234';
        this.NODE_ENV = process.env.NODE_ENV || '';
        this.SECRETE_KEY_ONE = process.env.SECRETE_KEY_ONE || '';
        this.SECRETE_KEY_TWO = process.env.SECRETE_KEY_ONE || '';
        this.CLIENT_URL = process.env.CLIENT_URL || '';
        this.REDIS_HOST = process.env.REDIS_HOST || '';

    }

    public createLogger(name: string): bunyan {
        return bunyan.createLogger({name, level: 'debug'})
    }

    public validateConfig(): void{
        for(const [key, value] of Object.entries(this)){
            if (value === undefined){
                throw new Error(`Configuration ${key} is undefined`);
            }
        }
    }
};

export const config: Config = new Config();

