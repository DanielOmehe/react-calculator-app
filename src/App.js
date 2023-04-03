import React, { useState } from "react";
import "./App.scss";
import Button from "./components/button";
import {
  Calculator,
  Display,
  Integers,
  KeyPad,
  Operators,
  TrigFunctions,
} from "./components";

function App() {
  
  return (
    <Calculator>
      <Display>
        <div className="input-screen"></div>
        <div className="output-screen"></div>
      </Display>
      <KeyPad>
        <TrigFunctions>
          <Button>Inv</Button>
          <Button value="sin(">sin</Button>
          <Button>cos</Button>
          <Button>tan</Button>
          <Button>log</Button>
          <Button>e</Button>
          <Button>^</Button>
          <Button>(</Button>
          <Button>)</Button>
          <Button>√</Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </TrigFunctions>
        <Integers>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>π</Button>
        </Integers>
        <Operators>
          <Button>CE</Button>
          <Button>DEL</Button>
          <Button>+</Button>
          <Button>-</Button>
          <Button>/</Button>
          <Button>*</Button>
          <Button>=</Button>
          <Button value="%">%</Button>
        </Operators>
      </KeyPad>
    </Calculator>
  );
}

export default App;
