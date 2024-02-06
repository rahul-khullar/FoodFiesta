import { useRouteError } from "react-router-dom"
const Error = () =>{
    const err = useRouteError();
    return(
        <div>
            <span>I'm Error component</span>
            <span>{err.status} : {err.statusText}</span>

        </div>
    )
}

export default Error;
