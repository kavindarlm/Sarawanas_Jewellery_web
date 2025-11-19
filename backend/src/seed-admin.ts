import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  try {
    // Check if admin user already exists
    const existingAdmin = await usersService.findByEmail('sarawanasjewellery@gmail.com');
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email: sarawanasjewellery@gmail.com');
      await app.close();
      return;
    }

    // Create admin user
    const admin = await usersService.create(
      'sarawanasjewellery@gmail.com',
      'sarawanas123', // Default password - CHANGE THIS IN PRODUCTION!
      'Admin User'
    );

    console.log('✅ Admin user created successfully!');
    console.log('Email: sarawanasjewellery@gmail.com');
    console.log('Password: sarawanas123');
    console.log('⚠️  Please change the password after first login!');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }

  await app.close();
}

bootstrap();
