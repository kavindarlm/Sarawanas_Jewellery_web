import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_URL ? 'postgres' : 'mysql',
      url: process.env.DATABASE_URL,
      host: process.env.DATABASE_URL ? undefined : (process.env.DB_HOST || 'localhost'),
      port: process.env.DATABASE_URL ? undefined : (parseInt(process.env.DB_PORT) || 3306),
      username: process.env.DATABASE_URL ? undefined : (process.env.DB_USERNAME || 'root'),
      password: process.env.DATABASE_URL ? undefined : (process.env.DB_PASSWORD || 'root'),
      database: process.env.DATABASE_URL ? undefined : (process.env.DB_NAME || 'sarawanas_jewellery'),
      autoLoadEntities: true,
      synchronize: false,
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
      extra: process.env.DATABASE_URL ? {
        // Force IPv4 to avoid IPv6 connection issues
        family: 4,
      } : {},
    }),
    ProductsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
