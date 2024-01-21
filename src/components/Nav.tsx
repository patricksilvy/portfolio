import Link from "next/link";
import { ChatIcon, GlobalIcon, HomeIcon } from "./Icons";

export default function Nav() {
    return (
    <nav className="w-full flex justify-center items-center">
        <div className={`
            max-w-sm px-8 py-4 rounded-full bg-[#262626] 
            flex items-center justify-between
        `}>
            <Link href="#" className="w-full px-8">
                <HomeIcon />
            </Link>
            |
            <Link href="#" className="w-full px-8">
                <GlobalIcon />
            </Link>
            |
            <Link href="#" className="w-full px-8">
                <ChatIcon />
            </Link>
        </div>
        </nav>
    )
}