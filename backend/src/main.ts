import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://*.vercel.app',
      'https://*.railway.app',
      /\.vercel\.app$/,
      /\.railway\.app$/,
    ],
    credentials: true,
  });
  
  app.setGlobalPrefix('api');
  
  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  console.log(`✅ Application is running on port: ${port}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ Database configured: ${process.env.DATABASE_URL ? 'Yes (PostgreSQL)' : 'Local MySQL'}`);
}

bootstrap().catch(err => {
  console.error('❌ Failed to start application:', err);
  process.exit(1);
});
