import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (

        <div style={{ marginTop: "100px" }}>
            <form onSubmit={handleSubmit}>
                <span data-testid>Book a table</span>
                <fieldset>
                    <div>
                        <label htmlFor="res-date">Choose Date</label>
                        <input
                            type="date"
                            id="res-date"
                            value={date}
                            onChange={(e) => {
                                handleChange(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="res-time">Choose Time</label>
                        <select id="res-time" required>
                            {props?.times?.availableTimes.map((time) => (
                                <option value={time} key={time}>
                                    {time}
                                </option>
                            ))}

                        </select>

                    </div>
                    <div>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number"
                            id="quests"
                            placeholder="1"
                            min={1}
                            max={10}
                            value={guests}
                            onChange={(e) => {
                                setGuests(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Occasion</label>
                        <select id="occasion"
                            value={occasion}
                            onChange={(e) => {
                                setOccasion(e.target.value)
                            }} required >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div>
                        <input aria-label="On Click" onClick={() => navigate("/ConfirmBooking")} type={"submit"} value={"Make Your Reservation"}></input>
                    </div>

                </fieldset>
            </form>
        </div>


    );
}

export default BookingForm;
