import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    navContainer: {
        height: "50px",
        display: "flex",
        justifyContent: "space-between"
    },
    navLinkContainer: {
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        height: "100%",
        width: "20%",
        justifyContent: "space-between",
        marginRight: "20px",
    },
    linkItem: {
        textDecoration: "none",
        color: "#fafafa",
        fontSize: "1.25rem"
    },
    navTitleContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    navTitle: {
        fontFamily: "'Bagerich', sans-serif",
        color: "#fafafa",
        marginLeft: "20px",
        marginBottom: "0px",
        textDecoration: "none",
        fontSize: "1.5rem",
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
                <Link to="/contact" className={classes.linkItem}>
                    contact
                </Link>
            </div>
        </div>
    )
}

export default NavBar