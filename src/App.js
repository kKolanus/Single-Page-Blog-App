import Home from './Home';
import Layout from './Layout';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {format} from 'date-fns';

function App() {

  const[posts, setPosts] = useState([
    {
      id: 1,
      title: "Wpis nr 1 - Inwokacja",
      datetime: "September 19, 2022 11:17:36 AM",
      body: "Litwo, Ojczyzno moja! ty jesteś jak zdrowie, Ile cię trzeba cenić, ten tylko się dowie, Kto cię stracił. Dziś piękność twą w całej ozdobieWidzę i opisuję, bo tęsknię po tobie. Panno święta, co Jasnej bronisz Częstochowy I w Ostrej świecisz Bramie! Ty, co gród zamkowy Nowogródzki ochraniasz z jego wiernym ludem!"
    },
    {
      id: 2,
      title: "Wpis nr 2 - Na lipę",
      datetime: "September 19, 2022 11:17:36 AM",
      body: "Gościu, siądź pod mym liściem, a odpoczni sobie! Nie dojdzie cię tu słońce, przyrzekam ja tobie, Choć się nawysszeń wzbije, a proste promienie. Ściągną pod swoje drzewa rozstrzelane cienie."
    },
    {
      id: 3,
      title: "Wpis nr 3 - Lokomotywa",
      datetime: "September 19, 2022 11:17:36 AM",
      body: "Stoi na stacji lokomotywa, Ciężka, ogromna i pot z niej spływa: Tłusta oliwa. Stoi i sapie, dyszy i dmucha, Żar z rozgrzanego jej brzucha bucha: Uch - jak gorąco! Puff - jak gorąco! Uff - jak gorąco!"
    },
    {
      id: 4,
      title: "Wpis nr 4 - test krótkiego wpisu",
      datetime: "September 19, 2022 11:17:36 AM",
      body: "Jestem krótkim wpisem"
    }
  ])
  const[search, setSearch] = useState('');
  const[searchResults, setSearchResults] = useState([]);
  const[postTitle, setPostTitle] = useState('');
  const[postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const filteredResults = posts.filter(post=>(
      (post.body).toLowerCase()).includes(search.toLowerCase())
      ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse());
  },[posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    const datatime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datatime, body: postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }
  
  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }

  //npm i react-router-dom -S
  // crtl+d - zaznacz wszystkie słowa
  return (

      <Routes>
        <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}/>}>
          <Route
          index element={<Home posts={searchResults}/>}/>
          
          <Route path="post">
            <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            />}/>

          <Route path=":id" element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
          </Route>
      </Routes>
  );
}

export default App;
