import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [TeachersModule],
  controllers: [AppController, TeachersController],
  providers: [AppService, TeachersService],
})
export class AppModule {}
