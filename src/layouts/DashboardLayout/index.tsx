import { MenuButton } from '@/components/Button'
import Sidebar from '@/components/Sidebar'
import { HiViewGridAdd } from "react-icons/hi"
import { MdArticle, MdGroup, MdMail } from "react-icons/md"
import { FaUniversity } from "react-icons/fa"
import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode | React.ReactNode[]
}
const DashboardLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const getPage = () => {
        const path = router.asPath;
        if (path === "/dashboard") {
            return "/";
          } else if (path.startsWith("/dashboard/article")) {
            return "/article";
          } else if (path.startsWith("/dashboard/academic")) {
            return "/academic";
          } else if (path.startsWith("/dashboard/ppdb")) {
            return "/ppdb";
          } else if (path.startsWith("/dashboard/contact")) {
            return "/contact";
          }else {
            return "other"; // Halaman selain dashboard dan artikel
          }
    }
    
    return (
        <main className='w-full'>
            <section className='fixed flex w-full'>
                <div className="hidden h-full md:block">
                    <Sidebar>
                        <MenuButton
                            active={getPage()==="/" ? true : false}
                            href="/dashboard"
                            icons={<HiViewGridAdd />}
                        >
                            Dashboard
                        </MenuButton>
                        <MenuButton
                            active={getPage()==="/article" ? true : false}
                            href={`${"/dashboard/article"}`}
                            icons={<MdArticle />}
                        >
                            Article
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/academic" ? true : false}
                            href="/dashboard/academic"
                            icons={<FaUniversity />}
                        >
                            Academic
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/ppdb" ? true : false}
                            href="/dashboard/ppdb"
                            icons={<MdGroup />}
                        >
                            PPDB
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/contact" ? true : false}
                            href="/dashboard/contact"
                            icons={<MdMail />}
                        >
                            Contact
                        </MenuButton>
                    </Sidebar>
                </div>
                <div className="flex-1 w-full min-h-screen max-h-screen p-4 py-6 pb-36 md:pb-16 overflow-auto bg-[#f2f2f2]">
                    {children}
                </div>
                <div className="fixed bottom-0 w-full md:hidden">
                    <Sidebar>
                        <MenuButton
                            active={getPage() === "/" ? true : false}
                            href="/dashboard"
                            icons={<HiViewGridAdd />}
                        >
                            Dashboard
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/article" ? true : false}
                            href="/dashboard/article"
                            icons={<MdArticle />}
                        >
                            Article
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/academic" ? true : false}
                            href="/dashboard/academic"
                            icons={<FaUniversity />}
                        >
                            Academic
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/ppdb" ? true : false}
                            href="/dashboard/ppdb"
                            icons={<MdGroup />}
                        >
                            PPDB
                        </MenuButton>
                        <MenuButton
                            active={getPage() === "/contact" ? true : false}
                            href="/dashboard/contact"
                            icons={<MdMail />}
                        >
                            Contact
                        </MenuButton>
                    </Sidebar>
                </div>
            </section>
        </main>
    )
}

export default DashboardLayout