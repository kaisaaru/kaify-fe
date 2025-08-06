import "../font.css";
import "../globals.css";
import MasterLayout from "@/masterLayout/MasterLayout";


export default function RootLayout({ children }) {
    return (
        <MasterLayout>
            {children}
        </MasterLayout>
    );
}
