import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import express from 'express';
import { Request, Response } from 'express';

let cachedApp: INestApplication;
let cachedExpressApp: express.Application;

async function bootstrap() {
  if (!cachedApp) {
    cachedExpressApp = express();
    const adapter = new ExpressAdapter(cachedExpressApp);
    
    cachedApp = await NestFactory.create(AppModule, adapter, {
      logger: ['error', 'warn'],
    });
    
    cachedApp.enableCors({
      origin: true,
      credentials: true,
    });
    
    cachedApp.setGlobalPrefix('api');
    await cachedApp.init();
  }
  
  return cachedExpressApp;
}

export default async (req: Request, res: Response) => {
  try {
    const app = await bootstrap();
    app(req, res);
  } catch (error) {
    console.error('Error in serverless function:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
