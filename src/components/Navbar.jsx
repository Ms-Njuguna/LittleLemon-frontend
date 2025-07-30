import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const { isAuthenticated, user } = useAuth();

    return (
        <nav className="">
            <div className="flex my-[20px]">
                {/* logo section */}
                <div>
                    <Link to="/">
                        <img src="./src/assets/logos/Asset 16@4x.png" alt="nav logo" className="h-[20px] w-[70px]"></img>
                    </Link>
                </div>

                {/* nav links */}
                <div className="">
                    <Link to="/about">About</Link>
                    <Link to="/reservation">Reservations</Link>
                    <Link to="/menu">Order Online</Link>
                    {isAuthenticated ? (
                        <Link to="/dashboard">Dashboard</Link>
                    ) : (
                        <Link to="/login">Log In</Link>
                    )}
                </div>

                {/* account and basket icons */}
                <div className="flex gap-4">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1F3B29"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                        <span className="absolute bottom-4 left-5 border border-[olive] rounded-full px-1 text-[8px]">0</span>
                    </div>
                    {isAuthenticated ? (
                        <img src={user.profilePhoto || "https://i.pinimg.com/1200x/5f/e6/ec/5fe6ec6b04253791438c8d27f9a52732.jpg"} alt="profile picture"></img>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1F3B29"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;