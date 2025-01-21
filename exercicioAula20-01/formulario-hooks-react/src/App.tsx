import { useState } from 'react'
import Form from './components/Form/Form'
import SubmissionList from './components/SubmissionList/SubmissionList'

interface Submission {
    firstName: string
    lastName: string
    email: string
}

function App() {
    const [submissions, setSubmissions] = useState<Submission[]>([])

    const handleFormSubmit = (data: Submission) => {
        setSubmissions([...submissions, data])
    }

    return (
        <div>
            <h1>Formulário com Lista</h1>
            <Form onSubmit={handleFormSubmit} />
            <SubmissionList submissions={submissions} />
        </div>
    )
}

export default App
