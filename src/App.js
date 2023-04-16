import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';
import './App.css';

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([]);
  let searchInput = useRef('')

  const handleSearch = async searchTerm => {
    if (!searchTerm) return
    document.title = `${searchTerm} Music`;
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}`)
    const resData = await response.json();
    if (resData.results.length) {
      setData(resData.results)
    } else {
      setData([]);
      setMessage("Nothing found for that artist")
    }

    console.log(resData)
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>

      <DataContext.Provider value={{ data }} >
        {message}
        <Gallery />
      </DataContext.Provider>
    </div>
  )
}

export default App
