import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const expressApp = express();
const createNestServer = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
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
  return app.init();
};

// For local development
if (process.env.NODE_ENV !== 'production') {
  const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(3001);
    console.log('Application is running on: http://localhost:3001');
  };
  bootstrap();
}

// For Vercel serverless
createNestServer(expressApp);

export default expressApp;
