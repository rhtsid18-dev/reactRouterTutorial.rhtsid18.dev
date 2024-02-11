import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
	return <div>Hello World!</div>;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error("Could not find the 'root' element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
