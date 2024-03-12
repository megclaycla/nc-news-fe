import { useState } from "react";

function Expander({ children }) {
    const [isShowing, setIsShowing] = useState(false)

    function handleClick(){
        setIsShowing((currIsShowing) => {
            return !currIsShowing
        })
    }

    function toggleContent(){
        if (isShowing) {
            return children;
        } else {
            return null
        }
    }

    return (
        <div>
            <button onClick={() => handleClick()}>{isShowing ? 'Hide' : 'View'} Comments</button>
            { toggleContent() }
        </div>
    )
}

export default Expander;