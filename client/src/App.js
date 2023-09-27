import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {AnimatePresence} from "framer-motion";
import PopUp from "./components/PopUp";

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  // fetch data from api
  useEffect(() => {
    loading && (
      async () => {
        const {data} = await axios.get('http://localhost:3333/api/shop')
        console.log(data)
        setData(data)
        setLoading(false)
      })()
  }, [loading]);

  return (
    <div className="App">
      <h2 className="page_title">Test React - Node JS - Display Data</h2>
      {loading ? <p>Loading...</p> :
        (
          <>
            <div className="shop_container">
              <div className="shop_info"
                   onClick={() => {
                     setIsVisible(true)
                   }}
              >
                <img src={data?.shop_picture} className="shop_info_img" alt={'image of the store'}/>
                <div className="shop_info_text">
                  <h3>{data?.shop_name}</h3>
                </div>
              </div>
            </div>
          </>
        )
      }

      {!loading && isVisible && (
        <AnimatePresence>
          <PopUp setIsVisible={setIsVisible} data={data}/>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
