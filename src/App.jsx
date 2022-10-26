import DarkMode from "./components/checkbox/DarkMode";
import styles from "./App.module.scss";

//? Lazy expect a function
//const LazyTest = lazy(() => import("./components/LazyTest"));
function App() {
  return (
    <>
      <DarkMode />
      <h1 className={styles.container}>Hello world!</h1>
      <h1 className={styles.text}>Hello</h1>
      <button type="submit" className={styles.button__primary}>
        Button
      </button>
    </>
  );
}

export default App;
