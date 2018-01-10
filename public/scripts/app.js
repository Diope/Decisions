'use strict';

console.log('App.js running');

var app = {
   title: 'Decisions, Decisions',
   subtitle: 'Take the guess work out of making life choices',
   options: [],
   disabled: true
};

var onFormSubmit = function onFormSubmit(e) {
   e.preventDefault();

   var option = e.target.elements.option.value;

   if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
   }
};

var removeAllHandler = function removeAllHandler() {
   app.options = [];
   render();
};

var decisionHandler = function decisionHandler() {
   var randNum = Math.floor(Math.random() * app.options.length);
   var option = app.options[randNum];
   alert(option);
};

var render = function render() {
   var template = React.createElement(
      'div',
      null,
      React.createElement(
         'h1',
         null,
         app.title
      ),
      app.subtitle && React.createElement(
         'p',
         null,
         app.subtitle
      ),
      React.createElement(
         'p',
         null,
         app.options.length > 0 ? 'Here are your options' : 'No Options available'
      ),
      React.createElement(
         'button',
         { disabled: app.options.length === 0 ? true : false, onClick: decisionHandler },
         'What Should I do?'
      ),
      React.createElement(
         'button',
         { onClick: removeAllHandler },
         'Remove All'
      ),
      React.createElement(
         'ol',
         null,
         app.options.map(function (option) {
            return React.createElement(
               'li',
               { key: option },
               option
            );
         })
      ),
      React.createElement(
         'form',
         { onSubmit: onFormSubmit },
         React.createElement('input', { type: 'text', name: 'option' }),
         React.createElement(
            'button',
            null,
            'Add Option'
         )
      )
   );
   ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
