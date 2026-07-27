import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import VisitUs from "./footer";

export default function RootLayout(){
    return(
        <div className="min-h-screen flex flex-col pt-16"> 
            <MainNavigation />
            <main className="flex-grow">
                <Outlet />
            </main>
            <VisitUs />
        </div>
    )
}
