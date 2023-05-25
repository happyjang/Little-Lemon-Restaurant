import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return (

        <div>
            {/* <BookingForm times={props.times} dispatch={props.dispatch} submitForm={props.submitForm} /> */}
            <BookingForm times={props.times} dispatch={props.dispatch} />
        </div>


    );



}

export default BookingPage;