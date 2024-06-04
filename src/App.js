import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import InputBox from "./components/InputBox";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo-list"))
  );

  const [newItem, setNewItem] = useState("");

  const [searchContent, setSearchContent] = useState("");

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newList = [...items, { id: id, item: newItem, checked: false }];
    setItems(newList);
    setNewItem("");
    localStorage.setItem("todo-list", JSON.stringify(newList));
  };

  return (
    <div className="App">
      <Header />
      <InputBox
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchBar
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      />
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items.filter((item) =>
          item.item.toLowerCase().includes(searchContent.toLowerCase())
        )}
      />
      <Footer noOfItems={items.length} />
    </div>
  );
}

export default App;
