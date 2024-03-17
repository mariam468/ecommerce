import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Username from './components/users/Username';
import Password from './components/users/Password';
import Register from './components/users/Register';
import Profile from './components/users/Profile'
import Recovery from './components/users/Recovery';
import Reset from './components/users/Reset';
import PageNotFound from './components/users/PageNotFound';
import ErrorBoundary from './components/users/ErrorBoundary';
import Homepage from './components/home/homepage';

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";


/** root routes  */
const router = createBrowserRouter([
    {
        path : './navbar',
        element : <Navbar></Navbar>
    },
    {
        path : './footer',
        element : <Footer></Footer>
    },
    {
        path : '/username',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/Password',
        element : <Password></Password>
    },
    {
        path : '/profile',
        element : <Profile></Profile>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
   
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/pagenotfound',
        element : <PageNotFound></PageNotFound>
    },
    {
        path : '/errorboundary',
        element : <ErrorBoundary></ErrorBoundary>
    },
    {
        path : '/homepage',
        element : <Homepage></Homepage>
    },
    {
        path : '/Dashboard',
        element : <Dashboard></Dashboard>
    },
    {
        path : '/Team',
        element : <Team></Team>
    },
    {
        path : '/Contacts',
        element : <Contacts></Contacts>
    },
    {
        path : '/Invoices',
        element : <Invoices></Invoices>
    },
    {
        path : '/Form',
        element : <Form></Form>
    },
    {
        path : '/Bar',
        element : <Bar></Bar>
    },
    {
        path : '/Pie',
        element : <Pie></Pie>
    },
    {
        path : '/Line',
        element : <Line></Line>
    },

    {
        path : './FAQ',
        element : <FAQ></FAQ>
    },
    {
        path : './Calendar',
        element : <Calendar></Calendar>
    },
    {
        path : './Geography',
        element : <Geography></Geography>
    },
    
])
export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
            
            <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          
            <Topbar setIsSidebar={setIsSidebar} />
            
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
        </main>
    );
}