import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import express, { Request, Response } from 'express';

const server = express();
let app: any;

async function createServer() {
  if (!app) {
    app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
      { logger: ['error', 'warn', 'log'] }
    );
    
    app.enableCors({
      origin: [
        'http://localhost:3000',
        'https://*.vercel.app',
        /\.vercel\.app$/,
      ],
      credentials: true,
    });
    
    app.setGlobalPrefix('api');
    await app.init();
  }
  return app;
}

export default async (req: Request, res: Response) => {
  await createServer();
  server(req, res);
};
