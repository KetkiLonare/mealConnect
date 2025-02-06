import React from "react";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="maindiv">
            <div className="footer">
                <div
                    className="part1"
                    onClick={() => {
                        navigate("/dashboard");
                    }}
                >
                    <img src="/assets/images/logo.png" alt="logo" />
                </div>
                <div className="part2">
                    <p>Important Links</p>
                    <ul className="links">
                        <li
                            onClick={() => {
                                navigate("/AboutUs");
                            }}
                        >
                            AboutUs
                        </li>
                        <li
                            onClick={() => {
                                navigate("/donations-list");
                            }}
                        >
                            Donate
                        </li>
                        <li
                            onClick={() => {
                                navigate("/recipients-list");
                            }}
                        >
                            Recieve
                        </li>
                    </ul>
                </div>
                <div className="part3">
                    <p>Contact Us:</p>
                    <ul className="contact-list">
                        <li>
                            <a href="https://www.instagram.com/" target="blank">
                                <img
                                    src="/assets/images/insta.png"
                                    alt="Instagram"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="blank">
                                <img src="/assets/images/x.png" alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/" target="blank">
                                <img
                                    src="/assets/images/linkedin.png"
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=krishagarwal1673@gmail.com"
                                target="blank"
                            >
                                <img
                                    src="/assets/images/gmail.png"
                                    alt="Email"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="part4">&#169; CopyRights Reserved 2024</div>
        </div>
    );
}
