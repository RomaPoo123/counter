import React, { useEffect, useState } from 'react';
import './App.css';
import { Cliker } from './features/cliker/UI/cliker/Cliker';
import { CustomizationCliker } from './features/customizationCliker/CustomizationCliker';



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
  const [values, setValues] = useState<ValuesType>({ maxValue: 1, startValue: 0 })

  /* useEffect(() => {
    let localValues: ValuesType
    let local = localStorage.getItem("проверка");
    local ? localValues = JSON.parse(local) : localValues = { maxValue: 1, startValue: 0 }
    setClik(localValues.startValue)
    setMaxCliks(localValues.maxValue)
    setValues(localValues)
  }, []) */

  //  Стейт для переключения панелей
  const [editMode, setEditMode] = useState<boolean>(true)

  // ширина Line
  const lineWidth = Math.round(((clik / maxCliks) * 100));

  // Callback  для обновления счетчика
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
  const onClickCustomizationHandler = () => {
    setMaxCliks(values.maxValue)
    setClik(values.startValue)
    setEditMode(!editMode)
    // localStorage.setItem("проверка", JSON.stringify(values))
  }
  const setEditModeHandler = () => {
    setEditMode(!editMode)
  }

  //  IU
  return (
    <div className="App">
      {editMode ? <Cliker
        addClik={addClik}
        resetClik={resetClik}
        Clik={clik}
        maxCliks={maxCliks}
        lineWidth={lineWidth}
        setEditMode={setEditModeHandler}
      /> : <CustomizationCliker
        addMaxValue={maxValueHandler}
        addStartValue={startValueHandler}
        onClick={onClickCustomizationHandler}
        start={values.startValue}
        max={values.maxValue}
      />}
    </div>
  );
}

export default App;
