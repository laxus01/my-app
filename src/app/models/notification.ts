import { Student } from "./student";

export interface Notification {

    schoolId: string;
    date: Date;
    students: Student[];
    
}