import Home from './Home';
import Layout from './Layout';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import {Route, Routes} from 'react-router-dom';
import { DataProvider } from './context/DataContext'

function App() {
  // npm i react-router-dom -S
  // crtl+d - zaznacz wszystkie słowa
  return (
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>              
            <Route index element={<Home/>}/>
            <Route path="post">
              <Route index element={<NewPost/>}/>
              <Route path=":id" element={<PostPage/>}/>
            </Route>
            <Route path="edit/:id">
              <Route index element={<EditPost/>}/>
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
  );
}

export default App;
