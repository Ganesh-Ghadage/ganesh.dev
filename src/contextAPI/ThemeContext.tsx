import React, {
      createContext,
      useContext,
      useEffect,
      useState,
      ReactNode,
} from 'react';
    
type Theme = 'light' | 'dark';
    
interface ThemeContextProps {
      theme: Theme;
      toggleTheme: () => void;
}
    
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
    
interface ThemeProviderProps {
      children: ReactNode;
}
    
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
      // Initialize theme from localStorage or default to 'light'
      const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
          return (localStorage.getItem('theme') as Theme) || 'dark';
        }
        return 'dark';
      });
    
      useEffect(() => {
        // Apply the dark class on the <html> element if theme is dark
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
};
    
export function useTheme(): ThemeContextProps {
      const context = useContext(ThemeContext);
      if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
      return context;
}
    