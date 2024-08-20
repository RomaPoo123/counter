import React, { useState } from 'react';
import './App.css';
import { Cliker } from './components/cliker/Cliker';
import { CustomizationCliker } from './components/customizationCliker/CustomizationCliker';

type ValuesType = {
  maxValue: number
  startValue: number
}


function App() {
  // Обновление значения
  const [clik, setClik] = useState<number>(0)
  // обновление max-cliks
  const [maxCliks, setMaxCliks] = useState<number>(1);
  // Стейт для отслеживания левой части
  const [values, setValues] = useState<ValuesType>({ maxValue: 0, startValue: 0 })
  // ширина Line
  const lineWidth = Math.round(((clik / maxCliks) * 100));

  // Collback  для обновления счетчика
  const addClik = () => {
    if (clik < maxCliks) {
      setClik(clik + 1)
    }
  }

  // Обновление счетчика и max-cliks
  const resetClik = () => {
    setClik(values.startValue)
  }
  // Callback для получения данных с Input (Для отслеживания изменений в input)
  const startValueHandler = (startValue: number) => {
    setValues({ ...values, startValue })
  }
  const maxValueHandler = (maxValue: number) => {
    setValues({ ...values, maxValue })
  }

  //  callback для кнопки SET
  const onClickHandler = () => {
    setMaxCliks(values.maxValue)
    setClik(values.startValue)
  }


  //  IU
  return (
    <div className="App">
      <Cliker
        addClik={addClik}
        resetClik={resetClik}
        Clik={clik}
        maxCliks={maxCliks}
        lineWidth={lineWidth}
      />
      <CustomizationCliker
        addMaxValue={maxValueHandler}
        addStartValue={startValueHandler}
        onClick={onClickHandler}
      />
    </div>
  );
}

export default App;
