import { ChangeEvent, useState } from 'react'

export function App() {
    const [liked, setLiked] = useState(true)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setLiked(event.target.checked)
    }

    return (
        <>
            <label htmlFor="like-checkbox">Eu curti isso</label>
            <input id="like-checkbox" type="checkbox" onChange={handleChange} checked={liked} />
            <p>{liked ? 'Você curtiu isso' : 'Você não curtiu isso'}</p>
        </>
    )
}
