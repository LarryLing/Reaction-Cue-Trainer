import React, { useState } from 'react';
import './App.css';
import StartButton from './components/StartButton/StartButton';
import AccordionContainer from './components/Accordion/AccordionContainer';
import SelectionsContainer from './components/Selections/SelectionsContainer';
import CategoriesContainer from './components/CategorySelect/CategoriesContainer';
import TimingsContainer from './components/Timings/TimingsContainer';
import { SelectedCuesType, TimingsType } from './components/Definitions';

export const SelectedCuesContext = React.createContext<SelectedCuesType | null>(null);
export const TimingsContext = React.createContext<TimingsType | null>(null);

function App() {
	const [ displayCategory, setDisplayCategory ] = useState("Visual");
	const [ selectedCuesMap, setSelectedCuesMap ] = useState(new Map<string, string[]>());
	const [ duration, setDuration ] = useState(300);
	const [ frequency, setFrequency ] = useState(5);

	return (
		<div className="App">
			<div className="Website-Header">
				<span>Reaction Cue Trainer</span>
			</div>
			<div className='Two-Column-Container'>
				<div className="Column Category-Accordion-Container">
					<CategoriesContainer displayCategory={ displayCategory } setDisplayCategory={ setDisplayCategory }/>
					<SelectedCuesContext.Provider value={{ selectedCuesMap, setSelectedCuesMap }}>
						<AccordionContainer displayCategory={ displayCategory }/>
					</SelectedCuesContext.Provider>
				</div>
				<div className="Column Selections-Timings-Start-Container">
					<SelectionsContainer selectedCuesMap={ selectedCuesMap }/>
					<TimingsContext.Provider value={{ duration, setDuration, frequency, setFrequency }}>
						<TimingsContainer/>
					</TimingsContext.Provider>
					<StartButton/>
				</div>
			</div>
		</div>
	);
}

export default App;