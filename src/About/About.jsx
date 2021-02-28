import NavBar from '../NavBar/NavBar'
import headshot from '../img/headshot-square.jpg'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

const useStyles = makeStyles({
    aboutContainer: {
        height: "90vmin",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    bioContainer: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        width: "75%"
    },
    socialContainer: {
        width: "40%",
        display: "flex",
        justifyContent: "space-around",
        // border: "1px solid blue"
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
    },
    aboutImage: {
        height: "200px",
        width: "200px",
        borderRadius: "100%", 
        marginBottom: "48px"
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
                <img 
                    src={headshot} 
                    alt="Headshot of Jordan"
                    className={classes.aboutImage}    
                />
                <div className={classes.socialContainer}>
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
                <a 
                    href="mailto:jordan.ashbacher@gmail.com"
                    target="_blank"
                    className={classes.linkItem}
                > 
                    <EmailIcon className={classes.socialIcon}/>
                    <span className={classes.socialText}>Email</span>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
