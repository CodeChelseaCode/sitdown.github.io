import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from './components/BottomNav';
import { EventContainer } from './components/Event Container';
import { EventProvider, InviteProvider } from './Context/EventContext';
// import Dogs from "./pages/Dogs";
// import Cats from "./pages/Cats";
// import Sheeps from "./pages/Sheeps";
// import Goats from "./pages/Goats";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <EventProvider >
          <InviteProvider >
            <EventContainer />
          </InviteProvider>
        </EventProvider>
        <BottomNav />
        {/* <Switch> */}
        {/* <Route path="/" exact component={Home} />
          <Route path="/" component={Cats} />
          <Route path="/" component={Sheeps} />
          <Route path="/goats" component={Goats} /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
