import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
    aboutContainer: {
        height: "100vmin",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    bioContainer: {
        display: "flex",
        flexFlow: "column"
    },
    bio: {
        color: "#fafafa",
        fontSize: "3rem",
    },
    linkItem: {
        textDecoration: "none",
        color: "#fafafa",
        fontSize : "2.5rem",
        marginBottom: "15px",
    },
    socialIcon: {
        height: "3rem",
        width: "3rem",
        color: "#fafafa",
        position: "relative",
        top: "8px",
        marginRight: "10px",
    },
    socialText: {
        verticalAlign: "text-top"
    }
})

const About = () => {
    const classes = useStyles()

    return (
        <>
        <NavBar />
        <div className={classes.aboutContainer}>
            <div className={classes.bioContainer}>
                <p className={classes.bio}>
                    A full stack developer passionate about creating positive
                    and inclusive experiences through technology and design.
                </p>
                <a 
                    href="https://github.com/jordan-ashbacher"
                    target="_blank"
                    className={classes.linkItem}
                > 
                    <GitHubIcon className={classes.socialIcon}/>
                    <span className={classes.socialText}>GitHub</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/jordan-ashbacher/"
                    target="_blank"
                    className={classes.linkItem}
                > 
                    <LinkedInIcon className={classes.socialIcon}/>
                    <span className={classes.socialText}>LinkedIn</span>
                </a>
            </div>
        </div>
        </>
    )
}

export default About
