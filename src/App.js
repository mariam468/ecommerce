import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './components/home/homepage';

import Username from './components/users/Username';
import Password from './components/users/Password';
import Register from './components/users/Register';
import Profile from './components/users/Profile';
import Recovery from './components/users/Recovery';
import Reset from './components/users/Reset';
import PageNotFound from './components/users/PageNotFound';


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

import Banner from './components/blog/Banner';
import Post from './components/blog/Post';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
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
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
    {
        path : '/Navbar',
        element : <Navbar></Navbar>
    },
    {
        path : '/Footer',
        element : <Footer></Footer>
    },
    {
        path : '/Homepage',
        element : <Homepage></Homepage>
    },
    {
        path : '/Topbar',
        element : <Topbar></Topbar>
    },
    {
        path : '/Sidebar',
        element : <Sidebar></Sidebar>
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
    {
        path : './ColorModeContext',
        element : <ColorModeContext></ColorModeContext>
    },
    {
        path : './usemode',
        element : <useMode></useMode>
    },
    {
        path :'./CssBaseline',
        element : <CssBaseline></CssBaseline>
    },
    {
        path : './ThemeProvider',
        element : <ThemeProvider></ThemeProvider>
    },
])

export default function App() {

    const postData = [
        {
            department: "SkinCare",
            title: "Women Skincare",
            author: "Mariam",
            designation: "TCE",
            info: `Skincare is the practice of caring for the skin to maintain its health, appearance, and overall well-being. It involves a range of activities and products designed to cleanse, moisturize, protect, and treat the skin, with the goal of achieving a clear, radiant complexion.

            Skincare routines can vary widely depending on factors such as skin type, age, climate, and personal preferences.`,
        },
        {
            department: "Haircare",
            title: "Women Haircare",
            author: "Zeina",
            designation: "TCE",
            info: `
            Haircare is a broad term that encompasses various practices and products aimed at maintaining the health, appearance, and manageability of hair. `,
        },
        {
            department: "Makeup",
            title: "Women Makeup",
            author: "Dana",
            designation: "TCE",
            info: `
            Makeup is a form of self-expression and enhancement that involves the application of cosmetics to the face and sometimes the body. It can be used to enhance features, conceal imperfections, and create different looks for various occasions`,
        }
    ]


  return (
    <main>
        <RouterProvider router={router}></RouterProvider>

         {/* blog */}
         <Banner />
        <div className='grid grid-cols-3 gap-4 p-8'>
                {postData.map((e) => {
                     return <Post content={e} />
                 })}
             </div>
    </main>
  );
};