import { TagsOverviewProvider } from './contexts/TagsOverviewContext/TagsOverviewContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TagsOverview from './features/TagsOverview/TagsOverview';
import MainLayout from './layout/MainLayout';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TagsOverviewProvider>
        <MainLayout>
          <TagsOverview />
        </MainLayout>
      </TagsOverviewProvider>
    </QueryClientProvider>
  );
}

export default App;
