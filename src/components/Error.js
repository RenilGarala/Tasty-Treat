
import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    return (
        <> 
            <h1>OOPS! ....</h1>
            <h2>Something Wants Wrong Renil</h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>
        </>
    )
}
export default Error