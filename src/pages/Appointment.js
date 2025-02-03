import React, { useState, useEffect } from "react";
import "../styles/appointment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Appointment() {
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    fetch("http://localhost:5000/available-appointments")
      .then((response) => response.json())
      .then((data) => setAvailableAppointments(data))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  function handleBooking(appointmentId) {
    if (!userEmail) {
      alert("Vous devez être connecté pour réserver un rendez-vous.");
      return;
    }

    fetch("http://localhost:5000/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appointmentId, userEmail })
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setAvailableAppointments((prev) =>
          prev.filter((appt) => appt.id !== appointmentId)
        );
      })
      .catch((error) => console.error("Erreur :", error));
  }

  if (!userEmail) {
    return <h2>Vous devez être connecté pour voir les rendez-vous.</h2>;
  }

  return React.createElement(
    "div",
    { className: "appointment" },
    React.createElement(Navbar),
    React.createElement(
      "div",
      { className: "appointment-container" },
      React.createElement("h2", null, "Rendez-vous Disponibles"),
      availableAppointments.length > 0
        ? availableAppointments.map((appt) =>
            React.createElement(
              "div",
              { key: appt.id, className: "appointment-item" },
              `Date : ${appt.date} | Heure : ${appt.time}`,
              React.createElement(
                "button",
                { onClick: () => handleBooking(appt.id) },
                "Réserver"
              )
            )
          )
        : React.createElement("p", null, "Aucun rendez-vous disponible.")
    ),
    React.createElement(Footer)
  );
}

export default Appointment;
