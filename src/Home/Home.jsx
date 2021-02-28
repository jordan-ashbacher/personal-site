import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    homeContainer: {
        height: "90vmin",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fafafa",
    },
    linkContainer: {
        width: "30%",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        // border: "1px solid blue",
    },
    titleContainer: {
        width: "60%",
        // border: "1px solid blue"
    },
    appTitle: {
        fontFamily: "'Bagerich', sans-serif",
        fontSize: "7rem",
    },
    linkItem: {
        textDecoration: "none",
        color: "#fafafa",
    },
})

const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.homeContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.appTitle}>Jordan Ashbacher</h1>
            </div>
            <div className={classes.linkContainer}>
                <Link to="/work" className={classes.linkItem}>
                    <h1>work</h1>
                </Link>
                <Link to="/about" className={classes.linkItem}>
                    <h1>about</h1>
                </Link>
            </div>
        </div>
    )
}

export default Home
