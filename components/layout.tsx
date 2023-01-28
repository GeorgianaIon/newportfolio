
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement } from "react"
import HomePageLayout from "./HomePageLayout";
import { Colors } from "../constants/Colors";
import { makeStyles } from "tss-react/mui";
import PageTitle from "./PageTitle";
import Navbar from "./Navbar";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SecondaryLayout from "./SecondaryLayout";

export default function Layout({ 
    children
 }:{
    children: ReactElement
}) {
  const router = useRouter();

  const isHomePage = router.pathname === '/';
  return (
    isHomePage 
    ? 
    <HomePageLayout>
        {children}
    </HomePageLayout>
    : 
    <SecondaryLayout>
      {children}
    </SecondaryLayout>
  )
}