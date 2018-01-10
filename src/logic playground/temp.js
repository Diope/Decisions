console.log('App.js running'); 

const app = {
      title: 'Decisions, Decisions',
      subtitle: 'Take the guess work out of making life choices',
      options: [],
      disabled: true
   };

const onFormSubmit = (e) => {
   e.preventDefault();

   const option = e.target.elements.option.value;

   if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
   }
};

const removeAllHandler = () => {
   app.options = [];
   render();
}

const decisionHandler = () => {
   const randNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randNum];
   alert(option);
}

const render = () => {
   const template = (
      <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length > 0 ? 'Here are your options' : 'No Options available'}</p>
         <button disabled={app.options.length === 0 ? true : false } onClick={decisionHandler}>What Should I do?</button>
         <button onClick={removeAllHandler}>Remove All</button>
         <ol>
            {
               app.options.map((option) => {
                 return <li key={option}>{option}</li>;
               })
            }
         </ol>

         <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
         </form>
      </div>
   );
   ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render();