import { Typography } from "@mui/material";

const TitledParagraph = ({title,paragraph}:any) => {


    return (<>
    <Typography
        sx={{marginBottom:2}}
        variant={"h4"}
        >{title}</Typography>
        <Typography
            sx={{marginBottom:2}} 
            variant="body1" 
            component={'p'}
        >{paragraph}</Typography>
    </>)
}

export default TitledParagraph;