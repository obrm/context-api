// Importing necessary hooks and functionalities from 'react' library.
import { useState, createContext } from 'react';

// Importing subLinks data which contains data for submenu items.
import subLinks from '../data';

// Creating a new context called AppContext which will be used to share state and functions across components.
const AppContext = createContext();

// This component, AppProvider, acts as a wrapper around the main app components and provides shared state and methods to its children.
const AppProvider = ({ children }) => {
  // State to handle the visibility of the sidebar.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State to handle the visibility of the submenu.
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // State to manage the current page details and its associated links for the submenu.
  const [page, setPage] = useState({ page: '', links: [] });

  // State to handle the position where the submenu will appear.
  const [location, setLocation] = useState({});

  // Function to open the sidebar.
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Function to close the sidebar.
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to open the submenu.
  // It also sets the details for the page and position where the submenu should appear.
  const openSubmenu = (pageName, coordinates) => {
    const page = subLinks.find((link) => link.page === pageName);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  // Function to close the submenu.
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  // The Provider component makes the state and functions available to all child components inside the provider.
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Exporting the AppProvider component and the AppContext to be used in other parts of the application.
export { AppProvider, AppContext };
