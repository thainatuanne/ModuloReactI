import { HeaderStyled } from "./styled";
import { userMock } from "../../mocks/user.mock";
import { useEffect, useState } from "react";
import { User } from "../../types/user.type";

export function Header() {
    const [user, setUser] = useState<User>({
        avatar: userMock.avatar,
        name: userMock.name,
    });

    useEffect(() => {
        // a função de efeito colateral não pode ser async

        // 1 - async await
        // async function buscaUsuario() {
        //   const reposta = await fetch(
        //     "https://api.github.com/users/leticialealperez"
        //   );
        //   const dadosObj = await reposta.json();

        //   setUser({
        //     avatar: dadosObj.avatar_url,
        //     name: dadosObj.name,
        //   });
        // }

        // buscaUsuario();

        // 2- then catch
        fetch("https://api.github.com/users/thainatuanne")
            .then((resposta) => resposta.json())
            .then((dadosObj) => {
                setUser({
                    avatar: dadosObj.avatar_url,
                    name: dadosObj.name,
                });
            });
    }, []);

    return (
        <HeaderStyled>
            <h1>Lista de Presença</h1>

            <div>
                <strong>{user.name}</strong>
                <img src={user.avatar} alt="Foto de perfil" />
            </div>
        </HeaderStyled>
    );
}