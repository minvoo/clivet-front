import './App.css';
import {NavBar} from "./components/nav-bar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home/home.page";
import {RegisterPage} from "./pages/register/register.page";
import {LoginPage} from "./pages/login/login.page";
import {ProfilePage} from "./pages/profile/profile.page";
import {AdminPage} from "./pages/admin/admin.page";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import {UnauthorizedPage} from "./pages/unauthorized/unauthorized.page";
import Footer from "./components/footer";
import {AuthGuard} from "./guards/auth.guard";
import {Role} from "./models/role";
import {Main} from "./pages/home/main.page"
import {PetListPage} from "./pages/pet/petlist.page";
import {AppointmentPage} from "./pages/appointment/appointment.page";
import { PetPage } from './pages/pet/pet.page';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/404" element={<NotFoundPage/>}/>
                    <Route path="/401" element={<UnauthorizedPage/>}/>

                    <Route path="/owners" element={
                        <AuthGuard roles={[Role.ADMIN]}>
                            <AdminPage/>
                        </AuthGuard>}/>

                    <Route path="/pets" element={<PetPage/>}/>
                    <Route path="/owners?ownerId=:ownerId" element={<PetPage/>}/>

                            <Route path='/appointment' element={
                            <AuthGuard roles={[Role.ADMIN]}>
                                <AppointmentPage/>
                            </AuthGuard>}/>
                    <Route path="/profile" element={<AuthGuard roles={[Role.USER, Role.ADMIN]}><ProfilePage/></AuthGuard>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
