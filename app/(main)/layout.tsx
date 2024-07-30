import NavbarTopSite from "../component/nav/NavbarTopSite";

export default function RootLayout({
    children,
}:{children:React.ReactNode})
{
    return (
        <>
            <NavbarTopSite/>
            {children}
        </>
    )
}