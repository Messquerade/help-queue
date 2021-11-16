import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;