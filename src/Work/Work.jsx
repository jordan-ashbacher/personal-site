import NavBar from '../NavBar/NavBar'
import Pear from '../Pear/Pear'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    workContainer: {
        height: "100vmin",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    projectTitle: {
        color: "#fafafa",
        fontFamily: "'Brightfate', sans-serif",
        fontSize: "5rem",
    }
})

const Work = () => {
    const classes = useStyles()

    return(
        <Pear />
        
    )
}

export default Work