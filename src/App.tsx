import { TagsOverviewProvider } from './contexts/TagsOverviewContext/TagsOverviewContext';
import TagsOverview from './features/TagsOverview/TagsOverview';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <TagsOverviewProvider>
      <MainLayout>
        <TagsOverview />
      </MainLayout>
    </TagsOverviewProvider>
  );
}

export default App;
