import { Copyright } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

const ExileAppFooter = () => {
    return (
    <Box
    component="footer"
    sx={{
      py: 1,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
    >
        <Container maxWidth="sm">
            <Typography variant="body1">
              Privacy policy
            </Typography>
            <Copyright />
          </Container>
    </Box>
    )
}

export default ExileAppFooter;