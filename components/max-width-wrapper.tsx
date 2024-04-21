interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return <div className="container max-w-screen-xl">{children}</div>;
};

export default MaxWidthWrapper;
