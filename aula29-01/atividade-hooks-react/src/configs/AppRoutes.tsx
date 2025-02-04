import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Example } from "../pages/Example";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/example" element={<Example />} />
            </Routes>
        </BrowserRouter>
    );
}