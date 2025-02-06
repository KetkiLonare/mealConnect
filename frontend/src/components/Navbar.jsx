import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Navbar() {
    const [name, setName] = useState([]);
    const [address, setAddress] = useState([]);
    const [elementVisible, setelementVisible] = useState(false);
    const [profilePicture, setProfilePicture] = useState();

    const toggledisplay = () => {
        setelementVisible(!elementVisible);
    };

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/auth/user-details`,
                    {
                        method: "GET",
                        headers: {
                            authorization:
                                "Bearer " + localStorage.getItem("token"),
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setName(data.user.name);
                setAddress(data.user.address);
                setProfilePicture(data.user.profilePicture);
            } catch (error) {
                console.error("Error in fetching: ", error);
            }
        };
        fetchdata();
    }, [profilePicture]);

    if (
        location.pathname === "/" ||
        location.pathname === "/Annamitra" ||
        location.pathname === "/Signup" ||
        location.pathname === "/Login"
    ) {
        return (
            <div>
                <div className="navbar1">
                    <img
                        src="/assets/images/logo.png"
                        onClick={() => {
                            window.location = "/Annamitra";
                        }}
                        alt="Logo"
                    />
                    <hr className="linebreak" />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="navbar2">
                    <div className="logo">
                        <img
                            src="/assets/images/logo.png"
                            onClick={() => {
                                window.location = "/dashboard";
                            }}
                            alt="Logo"
                        />
                    </div>
                    <div className="details">
                        <div className="name">
                            Hi {name} !! <br />
                        </div>
                        <div className="address">
                            {address.street}, {address.city}, {address.state}
                        </div>
                    </div>
                    <div className="profile">
                        <img
                            src={`${BASE_URL}${profilePicture}`}
                            alt="profile"
                            onError={(e) => {
                                e.target.src =
                                    "../public/assets/images/profilepic.jpeg";
                            }}
                            onClick={toggledisplay}
                        />
                    </div>
                    <div
                        className="sidebar"
                        style={{ display: elementVisible ? "flex" : "none" }}
                    >
                        <div
                            className="sidebar-link"
                            onClick={() => {
                                window.location = "/Dashboard";
                            }}
                        >
                            <img src="../assets/images/home.png" alt="" />
                            <div>Home</div>
                        </div>
                        <div
                            className="sidebar-link"
                            onClick={() => {
                                window.location = "/AboutUs";
                            }}
                        >
                            <img src="../assets/images/aboutus.png" alt="" />
                            <div>About Us</div>
                        </div>
                        <div
                            className="sidebar-link"
                            onClick={() => {
                                window.location = "/community";
                            }}
                        >
                            <img src="../assets/images/community.png" alt="" />
                            <div>Community</div>
                        </div>
                        <div
                            className="sidebar-link"
                            onClick={() => {
                                window.location = "/edit-profile";
                            }}
                        >
                            <img src="../assets/images/profile.png" alt="" />
                            <div>Profile</div>
                        </div>
                    </div>
                </div>
                <hr className="linebreak" />
            </div>
        );
    }
}

export default Navbar;
