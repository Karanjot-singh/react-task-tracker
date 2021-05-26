import Header from "./components/Header";

//Contains the root app component under which user defined Components are nested
function App() {
  //Write JS directly inside JSX using {}
  return (
    <div className='container'> {/*Must contain only one root element*/}
    <Header />
    </div>
  );
}

export default App;
