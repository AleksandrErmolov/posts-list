import React, { useState } from "react"
import '../src/styles/App.css'
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'ff', body: 'бб' },
    { id: 2, title: 'aa', body: 'аа' },
    { id: 3, title: 'cc', body: 'яя' },
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    
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
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Посты про JS" />
        : <h1 style={{textAlign:"center"}}>Посты не были найдены</h1>
      }
    </div>
  );
}

export default App;
