import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import GameContext from './GameContext'

const RevertButton = () => {

    const {revertMode, setRevertMode} = useContext(GameContext)

    const toggle = () => setRevertMode(!revertMode)

    return (
        <Button className="bigButton" onClick={toggle} variant={revertMode ? 'outline-danger' : 'outline-info'}>{revertMode ? 'Håla' : 'Normal'}</Button>
    )
}

export default RevertButton