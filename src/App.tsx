//导入组件
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider,SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import "./App.css";
import { Header } from "./components/Header";


export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="my-app-theme">
      <SidebarProvider open={false} >
        <AppSidebar/>

        <SidebarInset>
          <Header />
        </SidebarInset>
        </SidebarProvider>
    </ThemeProvider>  
  )
};

export default App;
