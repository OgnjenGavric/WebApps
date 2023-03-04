const rootElement = document.getElementById('root');

const reactRootElement = ReactDOM.createRoot(rootElement);


const listReactElement = React.createElement(
  'ul',
  null,
  React.createElement('li', null, React.createElement('p', null, 'Item 1')),
  React.createElement('li', null, React.createElement('p', null, 'Item 2')),
  React.createElement('li', null, React.createElement('p', null, 'Item 3')),
  React.createElement('li', null, React.createElement('p', null, 'Item 4')),
  React.createElement('li', null, React.createElement('p', null, 'Item 5')),
  React.createElement('li', null, React.createElement('p', null, 'Item 6')),
  React.createElement('li', null, React.createElement('p', null, 'Item 7')),
  React.createElement('li', null, React.createElement('p', null, 'Item 8'))
);


reactRootElement.render(listReactElement);