import './App.css';
import Header from './components/header'
import Main from './components/main/main'
import Footer from './components/footer'

    // "start": "node server/index.js",
    // "build": "cd client && npm install && npm run build"

function App() {
  return (
    <div className="App">
      
       <Header />
       <Main />
       <Footer />
    </div>
  );
}

export default App;
