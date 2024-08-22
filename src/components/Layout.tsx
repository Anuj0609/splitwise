import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};
