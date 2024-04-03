import { TagsOverviewProvider } from './contexts/TagsOverviewContext/TagsOverviewContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CustomSnackbarProvider } from './contexts/CustomSnackbarContext/CustomSnackbarContext';
import TagsOverview from './features/TagsOverview/TagsOverview';
import MainLayout from './layout/MainLayout';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TagsOverviewProvider>
        <CustomSnackbarProvider>
          <MainLayout>
            <TagsOverview />
          </MainLayout>
        </CustomSnackbarProvider>
      </TagsOverviewProvider>
    </QueryClientProvider>
  );
}

export default App;
