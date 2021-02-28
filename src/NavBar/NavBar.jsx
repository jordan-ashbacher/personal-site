import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    navContainer: {
        height: "5vmin",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
    },
    navLinkContainer: {
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        height: "100%",
        width: "10%",
        justifyContent: "space-between",
        marginRight: "40px",
    },
    linkItem: {
        textDecoration: "none",
        color: "#fafafa",
        fontSize: "1.5rem"
    },
    navTitleContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    navTitle: {
        fontFamily: "'Bagerich', sans-serif",
        color: "#fafafa",
        marginLeft: "30px",
        marginBottom: "0px",
        textDecoration: "none",
        fontSize: "2rem",
        marginTop: "10px",
    },
})

const NavBar = () => {
    const classes = useStyles()

    return(
        <div className={classes.navContainer}>
            <div className={classes.navTitleContainer}>
            <Link to="/home" className={classes.navTitle}>Jordan Ashbacher</Link>
            </div>
            <div className={classes.navLinkContainer}>
                <Link to="/work" className={classes.linkItem}>
                    work
                </Link>
                <Link to="/about" className={classes.linkItem}>
                    about
                </Link>
            </div>
        </div>
    )
}

export default NavBar