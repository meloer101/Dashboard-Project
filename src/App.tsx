//导入组件
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider,SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import "./App.css";


export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="my-app-theme">
      <SidebarProvider open={false} >
        <AppSidebar/>

        <SidebarInset></SidebarInset>
        </SidebarProvider>
    </ThemeProvider>  
  )
};

export default App;
