import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
<div className="min-h-screen flex flex-col bg-gray-50"> 
  <header className="text-white bg-gray-50/80 fixed top-0 w-full z-10 shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Logo_do_Banestes.svg/2560px-Logo_do_Banestes.svg.png"
        alt="Logo Banestes" draggable="false"
        className="h-12"
      />
    </div>
  </header>
      
      <main className="container mx-auto mt-20 px-4 py-6">
        {children}
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Banestes - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default Layout;