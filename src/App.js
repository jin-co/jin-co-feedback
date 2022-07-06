import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import { FeedackProvider } from './context/FeedbackContext'

const App = () => { 
  return (
    <FeedackProvider>
      <Router>
        <Header text="Hello" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />

            <Route path="/post/:id/:name" element={<Post />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
          
          <AboutIconLink />
        </div>
      </Router>
    </FeedackProvider>
  )
}

export default App
