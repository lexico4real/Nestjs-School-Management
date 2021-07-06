import { Module } from '@nestjs/common';
import { TeachersController } from './Teachers.controller';
import { TeachersService } from './Teachers.service';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
