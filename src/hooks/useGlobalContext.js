// Importing the useContext hook from the 'react' library.
// This hook is useful to consume the context values.
import { useContext } from 'react';

// Importing the AppContext which we defined in the previous file.
// This context contains the shared states and functions that we want to make available to other components.
import { AppContext } from '../context/context';

// A custom hook called useGlobalContext.
// This hook acts as an abstraction over the useContext hook to provide a simpler API for accessing the shared context values.
export const useGlobalContext = () => {
  // We use the useContext hook to get the current value of the AppContext.
  // This value will contain all the states and functions provided by the AppProvider component.
  return useContext(AppContext);
};

