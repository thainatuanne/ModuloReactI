import { Student } from "../../types/student.type";
import { CardStyled } from "./styled";

interface CardProps {
    student: Student;
}

export function Card(props: CardProps) {
    return (
        <CardStyled>
            <strong>{props.student.name}</strong>
            <small>
                {props.student.time.toLocaleTimeString("pt-br", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}
            </small>
        </CardStyled>
    );
}