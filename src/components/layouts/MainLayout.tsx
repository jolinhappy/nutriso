import TopBar from 'SRC/components/TopBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen">
      <TopBar />
      <div className="py-10 h-[calc(100vh-75px)] flex justify-center overflow-y-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
