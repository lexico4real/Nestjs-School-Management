import { Injectable, NotFoundException } from '@nestjs/common';

import { Teacher } from './Teacher.model';

@Injectable()
export class TeachersService {
  private Teachers: Teacher[] = [];

  insertTeacher(title: string, desc: string, salary: number) {
    const teacherId = Math.random().toString();
    const newTeacher = new Teacher(teacherId, title, desc, salary);
    this.Teachers.push(newTeacher);
    return teacherId;
  }

  getTeachers() {
    return [...this.Teachers];
  }

  getSingleTeacher(TeacherId: string) {
    const Teacher = this.findTeacher(TeacherId)[0];
    return { ...Teacher };
  }

  updateTeacher(
    TeacherId: string,
    title: string,
    desc: string,
    salary: number,
  ) {
    const [Teacher, index] = this.findTeacher(TeacherId);
    const updatedTeacher = { ...Teacher };
    if (title) {
      updatedTeacher.title = title;
    }
    if (desc) {
      updatedTeacher.jobDescription = desc;
    }
    if (salary) {
      updatedTeacher.salary = salary;
    }
    this.Teachers[index] = updatedTeacher;
  }

  deleteTeacher(prodId: string) {
    const index = this.findTeacher(prodId)[1];
    this.Teachers.splice(index, 1);
  }

  private findTeacher(id: string): [Teacher, number] {
    const TeacherIndex = this.Teachers.findIndex((prod) => prod.id === id);
    const Teacher = this.Teachers[TeacherIndex];
    if (!Teacher) {
      throw new NotFoundException('Could not find Teacher.');
    }
    return [Teacher, TeacherIndex];
  }
}
