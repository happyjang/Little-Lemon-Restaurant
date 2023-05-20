import React from "react";
import { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    
  
    return (
        <header>
        <div>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="res-date">Choose Date</label>
                        <input
                            type="date"
                            id="res-date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="res-time">Choose Time</label>
                        <select id="res-time"
                            value={time}
                            onChange={(e) => {
                                setTime(e.target.value)
                            }}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
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
                        />
                    </div>
                    <div>
                        <label htmlFor="">Occasion</label>
                        <select id="occasion"
                            value={occasion}
                            onChange={(e) => {
                                setOccasion(e.target.value)
                            }}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div>
                    <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
                    </div>

                </fieldset>
            </form>
        </div>
        </header>

    );
}

export default BookingForm;
