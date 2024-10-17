import { useState } from "react";
export default function Counter(){
//This counter component manages two state variables: count and days. 
 
    const [count, setCount] = useState(0);
    //original state variables for count is 0 while current state variables for days is 1
    const [days, setDays] = useState(1);

//this help you get a fixed date into the date variable
    const date = new Date("october 5 2024");// note that if you leave this data empty it will be dynamic that is not static date and month
    //setDate help you to mutate the date variable and the date is 5 so using + 1 help you increament the date variable which has the inital value of 1
    date.setDate(date.getDate() + count); // This creates a date object starting at "October 5, 2024". adds the current count to the date. So if count is 5, it'll be 5 days after October 5, 2024.
//Note what this line 12 does is adding count initial varaibles which is 0 to 5 which is the date.getDate

    //these are your jsx code below 
return(
<div>
 <div>
{/* setDays */}

<div>
    {/*this button only decrease the orignal state of the days by negative 1 i.e if its 3 it will minus 1 to become 2  */}
<button onClick={() => setDays((c) => c - 1)}>
-
</button>
<span> Steps : {days} </span>
 {/*this button only increase the orignal state of the days by 1 i.e if its 3 it will add 1 to become 4  */}
<button onClick={() => setDays((c) => c + 1)}>
+
</button>
</div>

 </div>
 
 
 
    <div>
        {/* this button only help you change the original state of your varaibels eg your days value change by - minus 1 i.e onclick of this button the initial which has the value of 0 will be change to -0 etc*/}
        <button onClick={() => setCount((c) => c - days)}>
        -
        </button>
        <span> Count : {count} </span>
        {/* this button only help you change the original state of your varaibels eg your days value change by + plus 1 i.e onclick of this button the initial which has the value of 0 will be change to 1 etc*/}
        <button onClick={() => setCount((c) => c + days)}>
        +
        </button>
    </div>
    {/* This is a conditional rendering statement to display a message based on the count value. 
    If the count is 0, it displays "Today is :". If the count is greater than 0, it displays the number of days from today. 
    If the count is less than 0, it displays the number of days ago */}
    Conditional (ternary) operator:

{/* This snippet uses the ternary operator ? : to handle different cases.

count === 0 checks if count is zero. If true, it outputs: "Today is : ".

If count is not zero, it moves to the next condition. */}
{/* The second condition checks if count > 0:

If count is greater than zero, it outputs: "${count} days from today is : ".

If count is less than zero, it defaults to the last part:

It outputs: "${Math.abs(count)} days ago was : " where Math.abs(count) ensures the count is positive. */}
    <p>{count === 0 ? "Today is : ": count > 0 ? ` ${count} days from today is : `: ` ${Math.abs(count)} days ago was :  ` }</p>
    <p>{date.toDateString()}</p>
    
</div>
)
}

