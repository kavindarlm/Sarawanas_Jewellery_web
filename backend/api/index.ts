import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as express from 'express';

let cachedApp: INestApplication;

async function bootstrap() {
  if (!cachedApp) {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    
    cachedApp = await NestFactory.create(AppModule, adapter, {
      logger: ['error', 'warn'],
    });
    
    cachedApp.enableCors({
      origin: true,
      credentials: true,
    });
    
    cachedApp.setGlobalPrefix('api');
    await cachedApp.init();
    
    return expressApp;
  }
  
  return cachedApp.getHttpAdapter().getInstance();
}

export default async (req: express.Request, res: express.Response) => {
  try {
    const app = await bootstrap();
    app(req, res);
  } catch (error) {
    console.error('Error in serverless function:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
};
