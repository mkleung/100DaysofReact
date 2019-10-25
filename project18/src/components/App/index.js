import React from 'react'
import Homepage from '../Homepage'
import Register from '../Register'
import Login from '../Login'
import Dashboard from '../Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createMuiTheme()


const App = () => {

  return (
      <MuiThemeProvider them={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/dashboard" component={Dashboard}></Route>
                </Switch>
            </Router>
      </MuiThemeProvider>
  )
}

export default App;
