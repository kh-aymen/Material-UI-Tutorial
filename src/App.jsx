import React from "react"
// import MuiTaps from './components/MuiTaps'
// import MuiTimeLine from './components/MuiTimeLine'
// import MuiMasonry from "./components/MuiMasonry"
import MuiResponsivensee from "./components/MuiResponsivensee"
// import DatePickerPackge from './components/DatePickerPackge'
// import MuiSkeleton from './components/MuiSkeleton'
// import MuiLoadingButton from './components/MuiLoadingButton'
// import MuiSnackbar from './components/MuiSnackbar'
// import MuiDialogo from './components/MuiDialogo.jsx'
// import MuiProgress from './components/MuiProgress.jsx'
// import MuiAlert from './components/MuiAlert'
// import MuiTable from './components/MuiTable'
// import MuiTooltip from './components/MuiTooltip'
// import MuiChip from './components/MuiChip'
// import MuiList from './components/MuiList'
// import MuiBadge from './components/MuiBadge'
// import MuiButtonNavigarion from './components/MuiButtonNavigarion'
// import MuiAvatar from './components/MuiAvatar'
// import MuiSpeedDial from './components/MuiSpeedDial'
// import MuiDrawer from './components/MuiDrawer'
// import MuiBreadCumbs from './components/MuiBreadCumbs'
// import MuiNavbar from './components/MuiNavbar'
// import MuiLinks from './components/MuiLinks'
// import MuiImageList from './components/MuiImageList'
// import MuiAccordion from './components/MuiAccordion'
// import MuiCard from './components/MuiCard'
// import MuiLayout from './components/MuiLayout'
// import MuiAutoComplite from './components/MuiAutoComplite'
// import MuiRating from './components/MuiRating'
// import MuiSwitch from './components/MuiSwitch'
// import MuiCheckbox from './components/MuiCheckbox'
// import MuiRadio from './components/MuiRadio'
// import MuiSelect from './components/MuiSelect'
// import MuiTextField from './components/MuiTextField'
// import MuiTypography from './components/MuiTypography'
// import MuiButton from './components/MuiButton'
import { createTheme, colors, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
      
    },
    
  },
  status: {
    danger: "#e53e3e",
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadio/> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplite /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLinks /> */}
        {/* <MuiBreadCumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiButtonNavigarion /> */}
        {/* <MuiAvatar/> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialogo /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <DatePickerPackge /> */}
        {/* <MuiTaps /> */}
        {/* <MuiTimeLine /> */}
        {/* <MuiMasonry /> */}
        <MuiResponsivensee />
      </div>
    </ThemeProvider>
  )
}

export default App
