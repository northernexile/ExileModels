import { Grid } from "@mui/material"
import ModelLinkBox from "../components/home/boxes/ModelLinkBox";
import ThrottleLinkBox from "../components/home/boxes/ThrottleLinkBox";
import BlogLinkBox from "../components/home/boxes/BlogLinkBox";
import ContactLinkBox from "../components/home/boxes/ContactLinkBox";

const Home = () => {
    
    return (
        <Grid container sx={{marginTop:2}}>
            <ModelLinkBox />
            <ThrottleLinkBox />
            <BlogLinkBox />
            <ContactLinkBox />
        </Grid>
    )

}

export default Home;