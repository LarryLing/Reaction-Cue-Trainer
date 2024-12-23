import React, { useState } from 'react';
import StartButton from './components/StartButton/StartButton';
import AccordionContainer from './components/Accordion/AccordionContainer';
import SelectionsContainer from './components/Selections/SelectionsContainer';
import TrainingSetupContainer from './components/TrainingSetup/TrainingSetupContainer';
import TrainingModal from './components/TrainingModal/TrainingModal';
import { UserSelectionsContextType } from './components/Definitions';
import { motion, AnimatePresence } from 'framer-motion';
import { getUserSelectionValidity } from './components/HelperFunctions';
import './App.css';

export const UserSelectionsContext = React.createContext<UserSelectionsContextType | null>(null);

function App() {
	const [ userSelectionsMap, setUserSelectionsMap ] = useState(new Map<string, string[]>());
	const [ duration, setDuration ] = useState(300);
	const [ frequency, setFrequency ] = useState(5);
    const [ isTrainingModeActive, setIsTrainingModeActive ] = useState(false);
    const [ isDurationVisible, setIsDurationVisible ] = useState(false);
    const [ isFrequencyVisible, setIsFrequencyVisible ] = useState(false);
    const [ isUniqueEnabled, setIsUniqueEnabled ] = useState(false);

	return (
		<div className="App">
			<div className="Website-Header">
				<span>Reaction Time Trainer</span>
			</div>
			<div className='Two-Column-Container'>
				<div className="Column Accordion-Container">
					<UserSelectionsContext.Provider value={{ userSelectionsMap, setUserSelectionsMap }}>
						<AccordionContainer/>
					</UserSelectionsContext.Provider>
				</div>
				<div className="Column Selections-Setup-Start-Container">
					<SelectionsContainer userSelectionsMap={ userSelectionsMap } />
                    <TrainingSetupContainer 
                        duration={ duration } setDuration={ setDuration }
                        frequency={ frequency } setFrequency={ setFrequency }
                        isDurationVisible={ isDurationVisible } setIsDurationVisible={ setIsDurationVisible }
                        isFrequencyVisible={ isFrequencyVisible } setIsFrequencyVisible={ setIsFrequencyVisible }
                        isUniqueEnabled={ isUniqueEnabled } setIsUniqueEnabled={ setIsUniqueEnabled }/>
					<StartButton 
                        isDurationZero={ duration === 0 } 
                        isFrequencyZero={ frequency === 0}
                        isUserSelectionsMapInvalid={ !getUserSelectionValidity(userSelectionsMap) }
                        isTrainingModeActive={ isTrainingModeActive }
                        setIsTrainingModeActive={ setIsTrainingModeActive }/>
                    <p className="Heads-Up-Text">
                        For the optimal viewing experience on mobile devices, please use Landscape mode while in Training Mode.
                    </p>
				</div>
			</div>
            <AnimatePresence>
                { 
                    isTrainingModeActive && (<motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}> 
                            <TrainingModal 
                                userSelectionsMap={ userSelectionsMap } 
                                duration={ duration } 
                                frequency={ frequency } 
                                isTrainingModeActive={ isTrainingModeActive } 
                                setIsTrainingModeActive={ setIsTrainingModeActive }
                                isDurationVisible={ isDurationVisible }
                                isFrequencyVisible={ isFrequencyVisible }
                                isUniqueEnabled={ isUniqueEnabled }/>
                        </motion.div>)
                }
            </AnimatePresence>
		</div>
	);
}

export default App;