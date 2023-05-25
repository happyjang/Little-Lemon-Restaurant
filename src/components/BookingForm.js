import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        //e.preventDefault()
        //props.submitForm(e);


        if (date !== "" && guests > 0 && occasion !== "" && occasion !== "0") {
            
            navigate("/ConfirmBooking")
        }
        
        
                        
        

    }

    const handleSelect = (value) => {
        console.log("occasion: ", occasion)
        setOccasion(value)
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>

                <form>
                    <span data-testid>Reserve a table</span>
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
                                required/>
                            
                        </div>
                        <div>
                            <label htmlFor="res-time">Choose Time</label>
                            <select id="res-time" required >
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
                                placeholder={0}
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
                                    handleSelect(e.target.value)
                                    
                                }}>
                                <option value="0" selected>Please choose an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        <div>
                        {/* <button onClick={() => navigate("/ConfirmBooking")} type="submit" value="Make Your Reservation"></button> */}
                        <button onClick={handleSubmit} type="submit">Make Your Reservation</button>
                        
                        </div>
                        

                    </fieldset>
                </form>

            </section>
        </header>


    );
}

export default BookingForm;
