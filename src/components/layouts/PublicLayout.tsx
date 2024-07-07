import TopBar from 'SRC/components/TopBar';

interface PublicPageLayoutProps {
  children: React.ReactNode;
}

const PublicPageLayout = ({ children }: PublicPageLayoutProps) => {
  return (
    <div className="h-screen">
      <TopBar isPublicPage />
      <div className="py-10 h-fit flex justify-center overflow-y-auto">{children}</div>
    </div>
  );
};

export default PublicPageLayout;
