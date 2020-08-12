import React from "react";
import ReactDOM from "react-dom";
import TabViewDemo from "./TabsDemo";
import CounterHook from "./Components/CounterHook";
import Practice from "./Components/Practice";
import WeatherDemo from "./Components/weather/WeatherDemo";
import AppTodo from "./addTodoApp/AppTodo";
import AutoSuggestExample from "./Components/AutoSuggestExample";
import AgGridTableExample from "./Components/AgGridTableExample";

const App :React.FC =()=>{
  return (
    <div className="app">
      {/* <TabViewDemo />
      <CounterHook /> 
      <h2>click on button to add the list</h2>
      <AppTodo />
      <h2>autosuggest</h2>
      <AutoSuggestExample /> */}
      <h2>ag grid tabe example</h2>
      <AgGridTableExample />
      </div>
  )
}
export default App;






