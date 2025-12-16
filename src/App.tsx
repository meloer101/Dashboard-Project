//导入组件
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import "./App.css";
import { Header } from "./components/Header";
import { Page } from "@/components/Page";
import { PageHeader } from "@/components/Page";
import { DashboardCard } from "@/components/DashboardCard";
import { AppBarChart } from "@/components/AppBarChart";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="my-app-theme">
      <SidebarProvider open={false}>
        <AppSidebar />

        <SidebarInset>
          <Header />
          <main>
            <Page>
              <PageHeader />
              <div className="">
                <DashboardCard
                  title="Vendor breakdown"
                  description="keep track of vendors and their security ratings."
                  buttonText="View full report"
                >
                  <AppBarChart />
                </DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
