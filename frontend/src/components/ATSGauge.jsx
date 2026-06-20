import {
 CircularProgressbar
}
from
"react-circular-progressbar";

import
"react-circular-progressbar/dist/styles.css";

function ATSGauge({
 score
}) {

 return (

<div
style={{
 width:200,
 margin:"auto"
}}
>

<CircularProgressbar
 value={score}
 text={`${score}%`}
/>

</div>

 );
}

export default ATSGauge;