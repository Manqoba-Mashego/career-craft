import Navbar from "@/components/navbar"

export default function mainLayout({children}){
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}