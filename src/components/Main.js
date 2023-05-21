import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";
import { useReducer } from "react";




const Main = () => {

    //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]);

    const updateTimes = (state, date) => {
        return {availableTimes: state}
    }
    const initializeTimes = {availableTimes:  ["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]}


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)



    return (
        <div>
            <BookingForm times={availableTimes} />
        </div>


    )
};

export default Main;