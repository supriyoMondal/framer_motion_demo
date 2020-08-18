import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  const location = useLocation();

  return (
    <>
      <Header />
      <Modal showModal={showModal} setModal={setModal} />
      <AnimatePresence exitBeforeEnter
        onExitComplete={() => setModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/base" exact>
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings" exact>
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order" exact>
            <Order setModal={setModal} pizza={pizza} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;