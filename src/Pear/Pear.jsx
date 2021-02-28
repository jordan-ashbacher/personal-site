import './Pear.css'
import NavBar from '../NavBar/NavBar'
import homeImage from '../img/pear-home.png'
import favoritesImage1 from '../img/pear-favorites-1.png'
import favoritesImage2 from '../img/pear-favorites-2.png'
import searchImage1 from '../img/pear-search.png'
import friendImage from '../img/pear-friends-1.png'
import infoImage from '../img/pear-info.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    workContainer: {
        height: "90vmin",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: "20px",
        // border: "1px solid blue"
    },
    projectTitle: {
        color: "#fafafa",
        fontFamily: "'Brightfate', sans-serif",
        fontSize: "6rem",
        marginBottom: "30px",
    },
    rowContainer: {
        // border: "1px solid blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        // marginBottom: "200px"
    },
    projectImageContainer: {
        height: "100%",
        width: "33%",
    },
    projectBioContainer: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "33%",
        marginBottom: "50px",
    },
    pearImage: {
        width: "418px",
        height: "848px",
        position: "relative",
    },
    projectBio: {
        color: "#fafafa",
        fontSize: "2rem",
    },
    placeholder: {
        height: "100%",
        width: "33%",
    }

})

const Pear = () => {
    const classes = useStyles()

    return(
        <>
        <NavBar />
        <div className={classes.workContainer}>
            <h1 className={classes.projectTitle}>Pear</h1>
            <div className={classes.projectBioContainer}>
                <p className={classes.projectBio}>A mobile friendly app built to eliminate the indecision around 
                    where to eat by matching your favorite restaurants with your friends'. </p>
                </div>
            <div className={classes.rowContainer}>
                <div className={classes.projectImageContainer}>
                    <img 
                        className={classes.pearImage} 
                        src={homeImage} alt="Pear home page"
                    />
                </div>
                <div className={classes.placeholder}></div>
            </div>

            <div className={classes.rowContainer}>
            <div className={classes.placeholder}></div>
                <div className={classes.projectImageContainer}>
                    <img 
                        className={classes.pearImage} 
                        src={searchImage1} alt="Pear home page"
                    />
                </div>
            </div>

            <div className={classes.rowContainer}>
                <div className={classes.projectImageContainer}>
                    <img 
                        className={classes.pearImage} 
                        src={favoritesImage1} alt="Pear favorites page"
                        id="favoriteImage1"
                    />
                </div>
                <div className={classes.placeholder}></div>
            </div>
            
            <div className={classes.rowContainer}>
            <div className={classes.placeholder}></div>
            <div className={classes.projectImageContainer}>
                    <img 
                        className={classes.pearImage} 
                        src={infoImage} alt="Pear favorites page"
                    />
                </div>
            </div>
            
            <div className={classes.rowContainer}>
                <div className={classes.projectImageContainer}>
                    <img 
                        className={classes.pearImage} 
                        src={friendImage} alt="Pear favorites page"
                        id="friendImage"
                    />
                </div>
                <div className={classes.placeholder}></div>
            </div>



        </div>
        </>
    )
}

export default Pear