import React, { useEffect, useState } from 'react';
import './App.css';
import { Cliker } from './features/cliker/UI/cliker/Cliker';
import { CustomizationCliker } from './features/customizationCliker/CustomizationCliker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { IncrementAC, initialStateType, InstallationAC, ResetAC } from './features/cliker/model/cliker-reducer';



type ValuesType = {
  maxValue: number
  startValue: number
}


const App = React.memo(() => {
  debugger;
  console.log("rerender App")
  const cliker = useSelector<RootState, initialStateType>(state => state.click)
  const dispatch = useDispatch()

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
  const lineWidth = Math.round(((cliker.click / cliker.maxValue) * 100));

  // Callback  для обновления счетчика
  const addClik = () => {
    if (cliker.click < cliker.maxValue) {
      dispatch(IncrementAC())
    }
  }

  // Обновление счетчика и max-cliks
  const resetClik = () => {
    dispatch(ResetAC())
  }

  //  callback для кнопки SET
  const onClickCustomizationHandler = () => {
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
        Clik={cliker.click}
        maxCliks={cliker.maxValue}
        lineWidth={lineWidth}
        setEditMode={setEditModeHandler}
      /> : <CustomizationCliker
        settingValues={(max, start) => { dispatch(InstallationAC(max, start)) }}
        onClick={onClickCustomizationHandler}
        start={cliker.startValue}
        max={cliker.maxValue}
      />}
    </div>
  );
})

export default App;
