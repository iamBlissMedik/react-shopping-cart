import { useState } from "react";
import { useQuery } from "react-query";

// components
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

// styles
import { Wrapper } from "./App.styles";

const getProducts = async () => {
  await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  return <div className="App">start</div>;
};

export default App;
