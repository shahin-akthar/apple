import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import AirPods from './components/AirPods'
import Home from './components/Home'
import Mac from './components/Mac'
import Store from './components/Store'
import TvAndHome from './components/TvAndHome'
import Vision from './components/Vision'
import Cart from './components/Cart'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/airpods" element={<AirPods/>} />
      <Route exact path="/mac" element={<Mac/>} />
      <Route exact path="/store" element={<Store/>} />
      <Route exact path="/tv-home" element={<TvAndHome/>} />
      <Route exact path="/vision" element={<Vision/>} />
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
)

export default App