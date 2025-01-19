import { Routes as RouterRoutes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AppRoutes: React.FC = () => {
    return (
        <RouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </RouterRoutes>
    )
}

export default AppRoutes
