import { Card } from "../components/Card";
import { Header } from "../components/Header";
import styled from "styled-components";
import { InputStyled } from "../components/Input/styled";
import { ButtonStyled } from "../components/Button/styled";
import { useCallback, useState } from "react";
import { Link } from "react-router";
import { Student } from "../types/student.type";
import { v4 as randomUUID } from "uuid";

const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export function Home() {
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState<Student[]>([]);
    // const inputStudentName = useRef<null | HTMLInputElement>(null);

    // useCallback => serve para memoizar a definição de uma função
    const handleSave = useCallback(() => {
        const newStudent: Student = {
            id: randomUUID(),
            name: studentName,
            time: new Date(),
        };

        setStudents((listaAtual) => [newStudent, ...listaAtual]);
    }, [studentName]);

    // 1 - Quando um estado/props do componente muda => re-renderização
    // useEffect(() => {
    //   //.. quando o studentName tiver seu valor atualizado, executa as instruções abaixo
    //   console.log(studentName);
    // }, [studentName]);

    // 2 - Renderização => quando o componente nasce na tela
    // useEffect(() => {
    //   const dadoNoStorage = localStorage.getItem("user");
    //   console.log(dadoNoStorage);

    //   // 3 - Quando o componente é removido da visualização na DOM
    //   return () => {
    //     console.log("Componente desmontado, morreu!");
    //   };
    // }, []);

    // 4 - Sempre, na renderização e na re-renderização
    // useEffect(() => {
    //   console.log("Executou!");
    // });

    return (
        <HomeStyled>
            <Header />

            <InputStyled
                value={studentName}
                onChange={(ev) => setStudentName(ev.target.value)}
                type="text"
                placeholder="Digite o nome..."
            />

            <ButtonStyled type="button" onClick={handleSave}>
                Adicionar
            </ButtonStyled>

            {students.map((student) => (
                <Card key={student.id} student={student} />
            ))}

            <Link to="/example">Ir para Example</Link>
        </HomeStyled>
    );
}