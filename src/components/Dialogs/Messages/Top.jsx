import { forwardRef } from "react";
function Top({ ref, text }) {
    return (<>
        <hr ref={ref}></hr>
        {text}
    </>
    )
}
export default forwardRef(Top)