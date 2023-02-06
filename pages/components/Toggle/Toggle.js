import React, { useState } from 'react'

function Toggle() {
    const [isActivate, setActive] = useState(false)

    const handleActivate = (e) => {
        !isActivate ? setActive(true) : setActive(false)
    }
    return (
        <div>
            <div>
                <h1 style={{cursor: 'pointer'}} onClick={handleActivate}>
                    {isActivate === true ? 'OPEN' : false}
                </h1>
                <h1 style={{cursor: 'pointer'}} onClick={handleActivate}>
                    {!isActivate ? 'CLOSE' : false}
                </h1>
            </div>
        </div>
    )
}

export default Toggle 