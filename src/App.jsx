import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import "./App.scss";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ComponentContainer/ItemDetailContainer/ItemDetailContainer";

function App() {
    const showName = (name) => name;

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ItemListContainer
                            greeting={"Te saludo desde Item List Container, "}
                            myName={showName("Ariel")}
                        />

                    }
                />
                <Route path="/category/:id" element={<ItemDetailContainer />} />
                {/* <Route path="/cart" element={<CartContainer />} /> */}
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
