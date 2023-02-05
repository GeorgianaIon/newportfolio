
import { useRouter } from "next/router";
import { FunctionComponent } from "react"
import HomePageLayout from "./HomePageLayout";
import SecondaryLayout from "./SecondaryLayout";

interface Props {
  children: React.ReactElement
}

const Layout: FunctionComponent<Props> = ({children}) => {
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

export default Layout