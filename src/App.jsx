import CardList from "./components/card/CardList";
import DarkMode from "./components/checkbox/DarkMode";
import Table from "./components/table/Table";
import styles from "./App.module.scss";

//? Lazy expect a function
//const LazyTest = lazy(() => import("./components/LazyTest"));
function App() {
  return (
    <div className={`${styles.main} dark:bg-slate-500`}>
      <div className={styles.my__container}>
        <div className="mb-2 ml-auto">
          <DarkMode />
        </div>
        <CardList />
        <Table/>
      </div>
    </div>
  );
}

export default App;
