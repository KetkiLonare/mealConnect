import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confirmation from "./RecipientPopup";
import "../styles/list.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function RecipientsList() {
    const [donations, setDonations] = useState([]);
    const [currentElement, setCurrentElement] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/lists/recipients-list`,
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
                setDonations(data.donationRequests);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        if (!isPopupOpen) {
            fetchDonations();
            const interval = setInterval(fetchDonations, 1000);
            return () => clearInterval(interval);
        }
    }, [isPopupOpen]);

    function handleClick(element) {
        setCurrentElement(element);
        setPopupOpen(true);
    }

    return (
        <div>
            <div className="list-heading">Nearby Donations</div>
            <div className="mainContainer">
                {donations.map((element) => (
                    <Recipient element={element} onRequestClick={handleClick} />
                ))}
            </div>
            <div className="bottom-btns">
                <button
                    className="btns-3"
                    onClick={() => {
                        navigate("/recipientRequest");
                    }}
                >
                    Custom Request
                </button>
            </div>
            {isPopupOpen && (
                <Confirmation
                    element={currentElement}
                    onClose={() => setPopupOpen(false)}
                />
            )}
        </div>
    );
}

function Recipient({ element, onRequestClick }) {
    return (
        <div className="product-container">
            <div className="product-image-container">
                <img
                    className="product-image"
                    src="/assets/images/mapapi.png"
                    style={{ width: "100%" }}
                    alt="hello"
                />
            </div>
            <div className="description">
                Description: {element.description}
            </div>
            <div className="serves">Serves: {element.serves}</div>
            <div className="date">
                Date: {new Date(element.date).toLocaleDateString("en-GB")}
            </div>
            <div className="addresspro">
                Address: {element.addressFrom.city} ,{" "}
                {element.addressFrom.postalcode}
            </div>
            <div className="category">Category: {element.category}</div>
            <div className="container-button">
                <button onClick={() => onRequestClick(element)} className="btn">
                    Accept
                </button>
            </div>
        </div>
    );
}
