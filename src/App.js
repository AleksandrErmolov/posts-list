import React, { useState, useMemo } from "react"
import '../src/styles/App.css'
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'ff', body: 'бб' },
    { id: 2, title: 'aa', body: 'аа' },
    { id: 3, title: 'cc', body: 'яя' },
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])
    
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort )
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MyInput
          placeholder="Поиск..."
          onChange={e => (setSearchQuery(e.target.value))}
          value={searchQuery}


        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
           
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },

          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
        : <h1 style={{textAlign:"center"}}>Посты не были найдены</h1>
      }
    </div>
  );
}

export default App;
