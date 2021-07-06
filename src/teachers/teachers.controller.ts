import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TeachersService } from './Teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly TeachersService: TeachersService) {}
  @Post()
  addTeacher(
    @Body('title') TeacherTitle: string,
    @Body('description') TeacherDesc: string,
    @Body('salary') Teachersalary: number,
  ) {
    const generatedId = this.TeachersService.insertTeacher(
      TeacherTitle,
      TeacherDesc,
      Teachersalary,
    );
    return { id: generatedId };
  }

  @Get()
  getAllTeachers() {
    return this.TeachersService.getTeachers();
  }

  @Get(':id')
  getTeacher(@Param('id') TeacherId: string) {
    return this.TeachersService.getSingleTeacher(TeacherId);
  }

  @Patch(':id')
  updateTeacher(
    @Param('id') TeacherId: string,
    @Body('title') TeacherTitle: string,
    @Body('description') TeacherDesc: string,
    @Body('salary') Teachersalary: number,
  ) {
    this.TeachersService.updateTeacher(
      TeacherId,
      TeacherTitle,
      TeacherDesc,
      Teachersalary,
    );
    return null;
  }

  @Delete(':id')
  removeTeacher(@Param('id') TeacherId: string) {
    this.TeachersService.deleteTeacher(TeacherId);
    return null;
  }
}
