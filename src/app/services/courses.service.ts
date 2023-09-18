import { Injectable } from '@angular/core';
import {CoursesStoreService} from '@app/services/courses-store.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private store: CoursesStoreService) {}
    getAll() {
        return this.store.getAll();
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    getCourse(id: string) {
        // Add your code here
    }

    deleteCourse(id: string) {
        // Add your code here
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        return this.store.getAllAuthors();
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        return this.store.getAuthorById(id);
    }
}
