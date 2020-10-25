import React, { useState } from 'react'

const GameContext = React.createContext()

const GameProvider = ({children}) => {
    const [revertMode, setRevertMode] = useState(false)
    return (
        <GameContext.Provider value={{
            revertMode,
            setRevertMode
        }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext

export {
    GameProvider
}