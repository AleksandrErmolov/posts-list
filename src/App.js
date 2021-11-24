import React, { useState } from "react"
import '../src/styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  
  ])


  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python 1', body: 'Description' },
    { id: 3, title: 'Python 2', body: 'Description' },

  ])



  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder={'Название поста'} />
        <MyInput type="text" placeholder={'Описание поста'} />
        <MyButton>Создать пост</MyButton>
        </form>
      <PostList posts={posts2} title="Посты про JS" />

    </div>
  );
}

export default App;
