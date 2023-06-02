import "../assets/css/reset.css";
import "../assets/css/globals.css";

//Scss ile yazilanlar
import "../assets/scss/index.scss";

import {Roboto} from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const roboto = Roboto({
    subsets: ["latin"], weight: ["100", "400", "500", "700", "900"],
});

export const metadata = {
    title: "FlutterKopf", description: "LaserKopf by powered",
};

export default function RootLayout({children}) {
    return (
    <html lang="en">
        <body className={`${roboto.className} flex flex-col `}>
            <Header/>
                {children}
            <Footer/>
        </body>
    </html>
    );
}
