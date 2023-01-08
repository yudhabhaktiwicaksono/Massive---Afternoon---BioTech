import React from "react";
import moment from 'momnet';
import "./date_time.css"


const Date_time = () =>{
const currentDateTime = moment().format('LLLL');
return (

    <div className="date">
        {currentDateTime}
    </div>

)

}

export default Date_time;