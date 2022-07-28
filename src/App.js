import React from 'react';
import './App.css';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import { ParentFour } from './components/IncorrectOptimization/ParentFour';
import { ParentThree } from './components/IncorrectOptimization/ParentThree';
import { GrandParent } from './components/Optimizations/GrandParent';
import { ParentTwo } from './components/Optimizations/ParentTwo';
import { Parent } from './components/ParentChild/Parent';
import { UseMemo } from './components/UseMemo';
import { UseReducer } from './components/UseReducer/UseReducer';
import { UseState } from './components/UseState/UseState';

function App() {
  return (
    <>
      <UseState />
      <UseReducer />
      <ObjectUseState />
      <ArrayUseState />
      <Parent />
      <GrandParent />
      <ParentTwo />
      <ParentThree />
      <ParentFour />
      <UseMemo />
    </>
  );
}

export default App;
