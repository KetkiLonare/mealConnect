import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confirmation from "./DonationPopup";
import "../styles/list.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function DonationsList() {
    const [recipients, setRecipients] = useState([]);
    const [currentElement, setCurrentElement] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipients = async () => {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/lists/donations-list`,
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
                setRecipients(data.recipientRequests);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        if (!isPopupOpen) {
            fetchRecipients();
            const interval = setInterval(fetchRecipients, 1000);
            return () => clearInterval(interval);
        }
    }, [isPopupOpen]);

    function handleClick(element) {
        setCurrentElement(element);
        setPopupOpen(true);
    }

    return (
        <div>
            <div className="list-heading">Nearby Requests</div>
            <div className="mainContainer">
                {recipients.map((element) => (
                    <Donation element={element} onDonateClick={handleClick} />
                ))}
            </div>
            <div className="bottom-btns">
                <button
                    className="btns-3"
                    onClick={() => {
                        navigate("/donationRequest");
                    }}
                >
                    Custom Donation
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

function Donation({ element, onDonateClick }) {
    return (
        <div className="product-container">
            <div className="product-image-container">
                <img
                    className="product-image"
                    src="/assets/images/mapapi.png"
                    style={{ width: "100%" }}
                    alt=""
                />
            </div>
            <div className="description">
                Description: {element.description}
            </div>
            <div className="serves">To Serve: {element.toServe}</div>
            <div className="date">
                Date: {new Date(element.date).toLocaleDateString("en-GB")}
            </div>
            <div className="addresspro">
                Address: {element.addressTo.city},{" "}
                {element.addressTo.postalcode}
            </div>
            <div className="category">Category: {element.category}</div>
            <div className="container-button">
                <button onClick={() => onDonateClick(element)} className="btn">
                    Donate
                </button>
            </div>
        </div>
    );
}
