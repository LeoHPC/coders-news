import { useRouter } from "next/router";
import { useCallback } from "react";

interface LayoutProps {
  children: React.ReactNode;
  title: string
}

export function Layout({ children, title }: LayoutProps) {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/')
  }, []);

  return (
    <div className="h-full min-h-screen relative">
      <div className="w-full h-72 bg-gray-800 rounded-b-[6.25rem] pt-11 px-32 flex justify-center items-center text-center">
        <img src="/logo.png" alt="Logo Coders Club" className="w-36 h-14 absolute left-[10%] top-10 cursor-pointer" onClick={handleLogoClick} />
        <h1 className="text-white text-4xl w-8/12">{title}</h1>
      </div>

      {children}

      <div className="pb-40" />
      <footer className="w-full h-28 absolute bottom-0 bg-gray-800 flex justify-center items-center">
        <div className="w-[85%] h-[85%] flex items-center flex-wrap">
          <hr className="w-full border-t border-[#ff2147]" />
          <h3 className="text-white" >
            Copyright Coders Club© 2022. Todos os direitos reservados.
          </h3>
        </div>
      </footer>
    </div>
  )
}