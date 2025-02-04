import { Student } from "../types/student.type";
import { v4 as randomUUID } from "uuid";

export const studentsMock: Student[] = [
    {
        id: randomUUID(),
        name: "Joao",
        time: new Date(),
    },
    {
        id: randomUUID(),
        name: "Maria",
        time: new Date(),
    },
];