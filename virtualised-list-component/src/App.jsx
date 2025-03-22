import VirtualisedList from "./VirtualisedList";

const App = () => {

  const item = Array.from({length: 10000}, (_,i) => ({
    id: i,
    label: `item ${i}`
  }))

  return(
    <div className="flex justify-center items-center h-screen">
      <VirtualisedList items={item} rowHeight={30} containerHeight={300} />
    </div>
  );


}

export default App;