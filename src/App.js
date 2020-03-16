import React from 'react';
import './App.css';
import PlusLine from './PlusLine'
import Button from './Button'
import {useAnimatedScale, useDimension} from './hooks'
import {sinify} from './utils'
function App() {
  const {scale, start} = useAnimatedScale(0.02 / 4, 20)
  const {w, h, resize, disableResize} = useDimension()
  return (
    <div className="App">
      {[0, 1].map(i => <PlusLine w = {w} h = {h} scale = {sinify(scale)} i = {i} n = {4}/>)}
      <Button w = {w} h = {h} onClick = {start}></Button>
    </div>
  );
}

export default App;
