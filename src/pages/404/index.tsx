import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box, Stack } from "@mui/material";

import Illustration_404 from "assets/images/logo/illustration_404.svg";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 580,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(2, 0),
}));

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h1" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: "#807d7d", fontSize: 20 }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>

          <Box
            component="img"
            src={Illustration_404}
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
            style={{ cursor: "pointer" }}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginTop: "3em !important",
              fontSize: 22,
              padding: "0.5em 1.5em",
              backgroundColor: "#00abff",
            }}
            onClick={() => {
              navigate("/dashboard", { replace: true });
            }}
          >
            Back To Dashboard
          </Button>
        </ContentStyle>
      </Container>
    </Stack>
  );
};

export default PageNotFound;
