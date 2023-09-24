import { Injectable } from '@angular/core';
import {filter, from} from 'rxjs';
import {mockedAuthorsList, mockedCoursesList} from '@shared/mocks/mock';

@Injectable({
    providedIn: 'root'
})
export class CoursesStoreService {
    getAll(){
        return from(mockedCoursesList);
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    getCourse(id: string) {
        // Add your code here
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    deleteCourse(id: string) {
        // Add your code here
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        return from(mockedAuthorsList);
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        return from(mockedAuthorsList).pipe(filter(item => item.id == id));
    }
}
