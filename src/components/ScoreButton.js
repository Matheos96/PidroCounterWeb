import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button'
import GameContext from './GameContext'

const ScoreButton = ({ value, incrementBy }) => {

    const {revertMode} = useContext(GameContext)

    const buttonPress = () => revertMode ? incrementBy(-value) : incrementBy(value)

    return (
        <Button className="scoreButton" variant="outline-primary" onClick={buttonPress}>{value}</Button>
    )
}

export default ScoreButton