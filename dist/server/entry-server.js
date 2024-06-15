import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, createContext, useContext } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, useNavigate, Navigate, Outlet, Routes, Route } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, AppBar, Container, Toolbar, Box, IconButton, Menu as Menu$1, MenuItem, Link as Link$1, Tooltip, Avatar, CssBaseline, TextField, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles/index.js";
import { Menu } from "@mui/icons-material";
import Cookies from "js-cookie";
import axios from "axios";
const ModelLinkBox = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, sx: { marginBottom: 2 }, children: /* @__PURE__ */ jsxs(Card, { sx: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1
  }, children: [
    /* @__PURE__ */ jsx(
      CardMedia,
      {
        image: "/src/assets/McrPicc.png",
        title: "An Image of Manchester Piccadilly Station",
        sx: { height: 140 }
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: "Model Buildings" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", children: "An upcoming range of model buildings that will be available in various scales to purchase and use with Model railways or in dioramas." })
    ] }),
    /* @__PURE__ */ jsxs(CardActions, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "contained", size: "small", children: "Share" }),
      /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/models", children: /* @__PURE__ */ jsx(Button, { variant: "outlined", size: "small", children: "Learn more" }) })
    ] })
  ] }) }) });
};
const ThrottleLinkBox = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, sx: { marginBottom: 2 }, children: /* @__PURE__ */ jsxs(Card, { sx: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1
  }, children: [
    /* @__PURE__ */ jsx(
      CardMedia,
      {
        image: "/src/assets/LydhamManor.png",
        title: "An Image of Lydham Manor at Kingswear Station, Devon",
        sx: { height: 140 }
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: "Web Throttle" }),
      /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
        /* @__PURE__ */ jsx("em", { children: "Coming soon..." }),
        "  A Web Throttle to control model railway layouts using systems such as DCC-EX"
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardActions, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "contained", size: "small", children: "Share" }),
      /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/throttle", children: /* @__PURE__ */ jsx(Button, { variant: "outlined", size: "small", children: "Learn more" }) })
    ] })
  ] }) }) });
};
const BlogLinkBox = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, sx: { marginBottom: 2 }, children: /* @__PURE__ */ jsxs(Card, { sx: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1
  }, children: [
    /* @__PURE__ */ jsx(
      CardMedia,
      {
        image: "/src/assets/Norchard.png",
        title: "Small hut at Norchard Junction in the Forest of Deam",
        sx: { height: 140 }
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: "Blog" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", children: "We are prototyping and building a product range and developing web based tools for DCC. Check out the blog to keep up with what's going on." })
    ] }),
    /* @__PURE__ */ jsxs(CardActions, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "contained", size: "small", children: "Share" }),
      /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/blog", children: /* @__PURE__ */ jsx(Button, { variant: "outlined", size: "small", children: "Learn more" }) })
    ] })
  ] }) }) });
};
const ContactLinkBox = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, sx: { marginBottom: 2 }, children: /* @__PURE__ */ jsxs(Card, { sx: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1
  }, children: [
    /* @__PURE__ */ jsx(
      CardMedia,
      {
        image: "/src/assets/Shunter.png",
        title: "A Class 08 at Paignton station, Devon",
        sx: { height: 140 }
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: "Get In Touch" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", children: "Contact us about upcoming products, the web throttle, custom orders or anytthing really" })
    ] }),
    /* @__PURE__ */ jsxs(CardActions, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "contained", size: "small", children: "Share" }),
      /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/contact", children: /* @__PURE__ */ jsx(Button, { variant: "outlined", size: "small", children: "Learn more" }) })
    ] })
  ] }) }) });
};
const Logo = "/assets/Logo-BtJYFY1E.svg";
const UserProfile = () => {
  const userData = Cookies.get("userRole");
  const getProfile = () => {
    let profile = { profile: void 0 };
    if (userData) {
      profile.profile = JSON.parse(userData);
    }
    return profile;
  };
  return getProfile();
};
const ExileAppBar = () => {
  const links = [
    { title: "Models", path: "/models" },
    { title: "Web Throttle", path: "/throttle" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" }
  ];
  const profileSettings = [
    { title: "Profile", path: "/profile" },
    { title: "Account", path: "/account" },
    { title: "Dashboard", path: "/admin" }
  ];
  const getAccessToken = () => {
    const token = Cookies.get("token");
    return token;
  };
  const isAuthenticated = () => {
    return !!getAccessToken();
  };
  const [profileName, setProfileName] = useState("?");
  useEffect(() => {
    var _a;
    const profile = UserProfile();
    setProfileName(((_a = profile.profile) == null ? void 0 : _a.name) ?? "?");
  });
  const loginLink = !isAuthenticated() ? { title: "Login", path: "/login" } : { title: "Logout", path: "/logout" };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return /* @__PURE__ */ jsx(AppBar, { position: "static", children: /* @__PURE__ */ jsx(Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxs(Toolbar, { disableGutters: true, children: [
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h6",
        noWrap: true,
        component: "a",
        href: "/",
        sx: {
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none"
        },
        children: /* @__PURE__ */ jsx(
          Box,
          {
            component: "img",
            sx: { width: 210, height: 50 },
            alt: "Exile Models",
            src: Logo
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(Box, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
      /* @__PURE__ */ jsx(
        IconButton,
        {
          size: "large",
          "aria-label": "account of current user",
          "aria-controls": "menu-appbar",
          "aria-haspopup": "true",
          onClick: handleOpenNavMenu,
          color: "inherit",
          children: /* @__PURE__ */ jsx(Menu, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Menu$1,
        {
          id: "menu-appbar",
          anchorEl: anchorElNav,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          keepMounted: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          open: Boolean(anchorElNav),
          onClose: handleCloseNavMenu,
          sx: {
            display: { xs: "block", md: "none" }
          },
          children: links.map((page) => /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseNavMenu, children: /* @__PURE__ */ jsx(Link$1, { style: { textDecoration: "none" }, color: "inherit", component: Link, to: page.path, children: /* @__PURE__ */ jsx(Typography, { sx: { textDecoration: "none" }, textAlign: "center", children: page.title }) }) }, page.title))
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h5",
        noWrap: true,
        component: "a",
        href: "/",
        sx: {
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none"
        },
        children: /* @__PURE__ */ jsx(
          Box,
          {
            component: "img",
            sx: {
              width: 210,
              height: 50
            },
            alt: "Exile Models",
            src: Logo
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: links.map((page) => /* @__PURE__ */ jsx(
      Button,
      {
        onClick: handleCloseNavMenu,
        sx: { my: 2, color: "white", display: "block", textDecoration: "none" },
        children: /* @__PURE__ */ jsx(Link$1, { style: { textDecoration: "none" }, color: "inherit", component: Link, to: page.path, children: /* @__PURE__ */ jsx(Typography, { sx: {
          textDecoration: "none"
        }, variant: "body1", component: "span", children: page.title }) })
      },
      page.title
    )) }),
    /* @__PURE__ */ jsxs(Box, { sx: { flexGrow: 0 }, children: [
      /* @__PURE__ */ jsx(Tooltip, { title: "Open settings", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleOpenUserMenu, sx: { p: 0 }, children: /* @__PURE__ */ jsx(Avatar, { alt: profileName, src: "/static/images/avatar/2.jpg" }) }) }),
      /* @__PURE__ */ jsxs(
        Menu$1,
        {
          sx: { mt: "45px" },
          id: "menu-appbar",
          anchorEl: anchorElUser,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          keepMounted: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          open: Boolean(anchorElUser),
          onClose: handleCloseUserMenu,
          children: [
            profileSettings.map((setting) => /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseUserMenu, children: /* @__PURE__ */ jsx(Link$1, { style: { textDecoration: "none" }, component: Link, to: setting.path, children: /* @__PURE__ */ jsx(Typography, { textAlign: "center", children: setting.title }) }) }, setting.title)),
            /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseUserMenu, children: /* @__PURE__ */ jsx(Link$1, { style: { textDecoration: "none" }, component: Link, to: loginLink.path, children: /* @__PURE__ */ jsx(Typography, { textAlign: "center", children: loginLink.title }) }) }, loginLink.title)
          ]
        }
      )
    ] })
  ] }) }) });
};
const ExileAppFooter = () => {
  return /* @__PURE__ */ jsx(
    Box,
    {
      component: "footer",
      sx: {
        py: 1,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]
      },
      children: /* @__PURE__ */ jsx(Container, { maxWidth: "sm" })
    }
  );
};
const PublicLayout = ({ children }) => {
  const themeOptions = {
    palette: {
      mode: "light",
      primary: {
        main: "#25555c"
      },
      secondary: {
        main: "#f50057"
      }
    }
  };
  const defaultTheme = createTheme(themeOptions);
  return /* @__PURE__ */ jsx(ThemeProvider, { theme: defaultTheme, children: /* @__PURE__ */ jsxs(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    /* @__PURE__ */ jsx(ExileAppBar, {}),
    children,
    /* @__PURE__ */ jsx(ExileAppFooter, {})
  ] }) });
};
const Home = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(Grid, { container: true, sx: { marginTop: 2 }, children: [
    /* @__PURE__ */ jsx(ModelLinkBox, {}),
    /* @__PURE__ */ jsx(ThrottleLinkBox, {}),
    /* @__PURE__ */ jsx(BlogLinkBox, {}),
    /* @__PURE__ */ jsx(ContactLinkBox, {})
  ] }) });
};
const ModelBuildings = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { children: "Model Buildings" }) });
};
const Throttle = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { children: "Throttle" }) });
};
const Blog = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { children: "Blog" }) });
};
const StandardGrid = ({ children }) => {
  return /* @__PURE__ */ jsx(Grid, { container: true, sx: { marginTop: 2 }, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Card, { sx: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1
  }, children: /* @__PURE__ */ jsx(CardContent, { children }) }) }) });
};
const TitledParagraph = ({ title, paragraph }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Typography,
      {
        sx: { marginBottom: 2 },
        variant: "h4",
        children: title
      }
    ),
    /* @__PURE__ */ jsx(
      Typography,
      {
        sx: { marginBottom: 2 },
        variant: "body1",
        component: "p",
        children: paragraph
      }
    )
  ] });
};
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Email",
        variant: "outlined",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        type: "email",
        fullWidth: true,
        required: true
      }
    ),
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Message",
        variant: "outlined",
        name: "message",
        value: formData.message,
        onChange: handleChange,
        type: "text",
        fullWidth: true,
        required: true
      }
    ),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: /* @__PURE__ */ jsx(Grid, { item: true, sx: { flexGrow: 1 }, children: /* @__PURE__ */ jsx(Button, { sx: { marginRight: 1 }, type: "submit", variant: "contained", size: "small", children: "Submit" }) }) })
  ] });
};
const Contact = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(StandardGrid, { children: [
    /* @__PURE__ */ jsx(
      TitledParagraph,
      {
        title: "Get In Touch",
        paragraph: "Use the form below to get in touch with us."
      }
    ),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] }) });
};
const About = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { children: "About" }) });
};
const Privacy = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { children: "Privacy Policy" }) });
};
const api = axios.create({
  withCredentials: true,
  baseURL: "https://localhost:3000"
});
const errorHandler = (error) => {
  var _a;
  const statusCode = (_a = error.response) == null ? void 0 : _a.status;
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }
  return Promise.reject(error);
};
api.interceptors.response.use(void 0, (error) => {
  return errorHandler(error);
});
function defineCancelApiObject(apiObject) {
  const cancelApiObject2 = {};
  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject = {
      controller: void 0
    };
    cancelApiObject2[apiPropertyName] = {
      handleRequestCancellation: () => {
        if (cancellationControllerObject.controller) {
          cancellationControllerObject.controller.abort();
        }
        cancellationControllerObject.controller = new AbortController();
        return cancellationControllerObject.controller;
      }
    };
  });
  return cancelApiObject2;
}
const LoginApi = {
  login: async function(payload, cancel = false) {
    const response = await api.request({
      url: "/auth/login",
      method: "POST",
      data: payload,
      signal: cancel ? cancelApiObject$1[this.login.name].handleRequestCancellation().signal : void 0
    });
    return response.data;
  },
  logout: async function() {
    Cookies.remove("token");
    Cookies.remove("userRole");
  }
};
const cancelApiObject$1 = defineCancelApiObject(LoginApi);
const initialState = {
  text: "",
  type: ""
};
const AlertContext = createContext({
  ...initialState,
  setAlert: () => {
  }
});
const useAlert = () => useContext(AlertContext);
const LoginForm = () => {
  const navigate = useNavigate();
  const { setAlert } = useAlert();
  const loginApi = LoginApi;
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    loginApi.login(formData, true).then((response) => {
      var _a, _b;
      const tokenResponse = (_a = response.data) == null ? void 0 : _a.access_token;
      const userData = JSON.stringify((_b = response.data) == null ? void 0 : _b.user);
      if (tokenResponse) {
        Cookies.set("token", tokenResponse, { expires: 7, secure: true });
      }
      if (userData) {
        Cookies.set("userRole", userData);
      }
      setAlert("Logged in", "success");
      if (tokenResponse && userData) {
        navigate("/", { replace: true });
      }
    }).catch((error) => {
      setAlert("Log in failed", "error");
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Email",
        variant: "outlined",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        type: "email",
        fullWidth: true,
        required: true
      }
    ),
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Password",
        variant: "outlined",
        name: "password",
        value: formData.password,
        onChange: handleChange,
        type: "password",
        fullWidth: true,
        required: true
      }
    ),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsxs(Grid, { item: true, sx: { flexGrow: 1 }, children: [
        /* @__PURE__ */ jsx(Button, { sx: { marginRight: 1 }, type: "submit", variant: "contained", size: "small", children: "Login" }),
        /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/register", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outlined", size: "small", children: "Register" }) })
      ] }),
      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/password/reset", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "contained", color: "secondary", children: "Forgotten Password?" }) }) })
    ] })
  ] });
};
const Login = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(StandardGrid, { children: [
    /* @__PURE__ */ jsx(
      TitledParagraph,
      {
        title: "Login",
        paragraph: "Please enter your email and password to log in."
      }
    ),
    /* @__PURE__ */ jsx(LoginForm, {})
  ] }) });
};
const RegistrationApi = {
  register: async function(payload, cancel) {
    const response = await api.request({
      url: "/auth/register",
      method: "POST",
      data: payload,
      signal: cancel ? cancelApiObject[this.register.name].handleRequestCancellation().signal : void 0
    });
    return response.data;
  }
};
const cancelApiObject = defineCancelApiObject(RegistrationApi);
const RegistrationForm = () => {
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const registration = RegistrationApi;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstNames: "",
    lastName: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationPayload = {
      email: formData.email,
      password: formData.password,
      confirm: formData.confirmPassword,
      username: [formData.firstNames, formData.lastName].join(" ")
    };
    registration.register(registrationPayload, true).then(() => {
      setAlert("User " + formData.email + " registered", "success");
      navigate("/login", { replace: true });
    }).catch(() => {
      setAlert("Registration failed", "error");
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "First names",
        variant: "outlined",
        name: "firstNames",
        value: formData.firstNames,
        onChange: handleChange,
        type: "text",
        fullWidth: true,
        required: true,
        error: true,
        helperText: "Firstnames required"
      }
    ),
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Last name",
        variant: "outlined",
        name: "lastName",
        value: formData.lastName,
        onChange: handleChange,
        type: "text",
        helperText: "Last name is required",
        fullWidth: true,
        required: true,
        error: true
      }
    ),
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Email",
        variant: "outlined",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        type: "email",
        fullWidth: true,
        required: true,
        error: true,
        helperText: "Enter a valid email"
      }
    ),
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Password",
        variant: "outlined",
        name: "password",
        value: formData.password,
        onChange: handleChange,
        type: "password",
        fullWidth: true,
        required: true,
        error: true,
        helperText: "Enter your password"
      }
    ),
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Confirm Password",
        variant: "outlined",
        name: "confirmPassword",
        value: formData.confirmPassword,
        onChange: handleChange,
        type: "password",
        fullWidth: true,
        required: true
      }
    ),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: /* @__PURE__ */ jsxs(Grid, { item: true, sx: { flexGrow: 1 }, children: [
      /* @__PURE__ */ jsx(Button, { sx: { marginRight: 1 }, type: "submit", variant: "contained", size: "small", children: "Register" }),
      /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/login", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "outlined", size: "small", children: "Login" }) })
    ] }) })
  ] });
};
const Register = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(StandardGrid, { children: [
    /* @__PURE__ */ jsx(
      TitledParagraph,
      {
        title: "Register",
        paragraph: "Please enter your details in the form below to register"
      }
    ),
    /* @__PURE__ */ jsx(RegistrationForm, {})
  ] }) });
};
const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return /* @__PURE__ */ jsxs("form", { children: [
    /* @__PURE__ */ jsx(
      TextField,
      {
        sx: { marginBottom: 1 },
        label: "Email",
        variant: "outlined",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        type: "email",
        fullWidth: true,
        required: true
      }
    ),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, sx: { flexGrow: 1 }, children: /* @__PURE__ */ jsx(Button, { sx: { marginRight: 1 }, type: "submit", variant: "contained", size: "small", children: "Send Password Reset Email" }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none" }, to: "/login", children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "contained", color: "secondary", children: "Cancel" }) }) })
    ] })
  ] });
};
const ResetPassword = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(StandardGrid, { children: [
    /* @__PURE__ */ jsx(
      TitledParagraph,
      {
        title: "Reset Your Password",
        paragraph: "Enter your email in the form below to receive an email in your inbox to allow you to reset your password."
      }
    ),
    /* @__PURE__ */ jsx(ResetPasswordForm, {})
  ] }) });
};
const VerifyRegistration = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: "Verify Registration" });
};
const VerifyReminder = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: "Verify reminder email." });
};
const ProtectedRoute = () => {
  const getAccessToken = () => {
    return Cookies.get("token");
  };
  const isAuthenticated = () => {
    const token = getAccessToken();
    return token ? true : false;
  };
  if (!isAuthenticated()) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/login" });
  }
  return /* @__PURE__ */ jsx(Outlet, {});
};
const Admin = () => {
  return /* @__PURE__ */ jsx("div", { children: "Admin" });
};
const Profile = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: "Profile" });
};
const Account = () => {
  return /* @__PURE__ */ jsx(PublicLayout, { children: "Account" });
};
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    LoginApi.logout().then(() => {
      navigate("/", { replace: true });
    });
  }, []);
  return /* @__PURE__ */ jsx(CircularProgress, {});
};
const Router = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/models", element: /* @__PURE__ */ jsx(ModelBuildings, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/throttle", element: /* @__PURE__ */ jsx(Throttle, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(Blog, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(Privacy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(Login, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/register", element: /* @__PURE__ */ jsx(Register, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/password/reset", element: /* @__PURE__ */ jsx(ResetPassword, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/email/verify", element: /* @__PURE__ */ jsx(VerifyRegistration, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/reminder/verify", element: /* @__PURE__ */ jsx(VerifyReminder, {}) }),
    /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(ProtectedRoute, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "/account", element: /* @__PURE__ */ jsx(Account, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/profile", element: /* @__PURE__ */ jsx(Profile, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/admin", element: /* @__PURE__ */ jsx(Admin, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/logout", element: /* @__PURE__ */ jsx(Logout, {}) })
    ] })
  ] });
};
function render({ path }) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(Router, {}) }) })
  );
  return { html };
}
export {
  render
};
