import { useState } from "react";

const User = ({name, destination}) => {
    const [count] = useState(0)
    const [count2] = useState(1)
    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>count is : {count}</h1>
            <h1>count2 is : {count2}</h1>
            <h1>Name : {name}</h1>
            <h2>location : {destination}</h2>
            <h3>Email : kannam@gmail.com</h3>
        </div>
    )
}

export default User;