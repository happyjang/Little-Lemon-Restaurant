import React from "react";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ConfirmBooking from "./ConfirmBooking";
import BookingPage from "./BookingPage";




const Main = () => {

    //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]);


    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function (formData) {
        return true;
    };

    const initializeTimes = { availableTimes: fetchAPI(new Date()) }

    const updateTimes = (state, date) => {
        return { availableTimes: fetchAPI(new Date(date)) }
    }


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    

    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            // navigate("/ComfirmBooking")
        }
    }

  
        return (
            <main>
                <Routes>
                    <Route path="/" element={<Header />} />
                    {/* <Route path="/BookingPage" element={<BookingPage times={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} /> */}
                    <Route path="/BookingPage" element={<BookingPage times={availableTimes} dispatch={dispatch} />} />
                    <Route path="/ConfirmBooking" element={<ConfirmBooking />} />
                </Routes>

            </main>


        )
    };

export default Main;
