import './App.css';
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
import Button3 from './components/example-3-css-in-js/Button';
import Button4 from './components/example-4-styled-components/Button';
import Button5 from './components/example-5-css-modules/Button';
import Button6 from './components/example-6-sass/Button';

const App = () => {
  return (
    <div className="App">
        <Button1 buttonText="Normal css" />
        <Button2 buttonText="Inline css" />
        <Button3 buttonText="Css in js" />
        <Button4 buttonText="Styled Comps" />
        <Button5 buttonText="Css Modules" />
        <Button6 buttonText="Sass" />
    </div>
  );
};

export default App;