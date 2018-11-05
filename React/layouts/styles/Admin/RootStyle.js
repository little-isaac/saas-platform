import {
  primaryCardHeader,
  successColor,
  dangerColor,
  primaryColor
} from 'assets/jss/material-dashboard-react.jsx';

export const drawerWidth = 240;

export const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex"
    },
    flex: {
        flex: 1
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    fullScreenDialogAppBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        position: "relative",
        ...primaryCardHeader
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...primaryCardHeader
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9
        }
    },
    loading: {
        position: "absolute",
        top: "64px",
        left: "0px",
        width: "100%"
    },
    avatar: {
        margin: 10
    },
    smSmallAvatar: {
        width: 25,
        height: 25,
        fontSize: 20
    },
    smallAvatar: {
        width: 40,
        height: 40,
        "font-size": 15
    },
    bigAvatar: {
        width: 60,
        height: 60
    },
    largeAvatar: {
        width: 100,
        height: 100,
        fontSize: 40
    },
    table: {
        root: {
            width: "100%",
            marginTop: theme.spacing.unit * 3
        },
        table: {
            minWidth: 1020
        },
        tableWrapper: {
            overflowX: "auto"
        },
        progress: {
            margin: theme.spacing.unit * 2
        }
    },
    position_relative: {
        position: "relative"
    },
    top_0: {
        top: "0"
    },
    mt: {
        marginTop: theme.spacing.unit
    },
    d: {
        // display
        ib: {
            // inline-block
            display: "inline-block"
        }
    },
    action: {
        btn: {
            width: 40,
            height: 40
        }
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    pagination_style_root: {
        color: "white"
    },
    mr20: {
        marginRight: 20
    },
    mr5: {
        marginRight: 5
    },
    textCenter: {
        textAlign: "center"
    },
    successIcon: {
        color: successColor
    },
    dangerIcon: {
        color: dangerColor
    },
    primaryIcon: {
        color: primaryColor
    },
    autoComplete: {
        container: {
            flexGrow: 1,
            position: "relative",
            height: 250
        },
        suggestionsContainerOpen: {
            position: "absolute",
            zIndex: 1,
            marginTop: theme.spacing.unit,
            left: 0,
            right: 0
        },
        suggestion: {
            display: "block"
        },
        suggestionsList: {
            margin: 0,
            padding: 0,
            listStyleType: "none"
        }
    }
});

export const dashboardStyle = theme => ({
    successText: {
        color: successColor
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    stats: {
        color: "#999999",
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px"
        }
    },
    cardCategory: {
        color: "#999999",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
});
