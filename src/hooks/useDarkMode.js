import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);
    useEffect(()=>{
        const body = document.getElementsByTagName("body")
        if(darkMode === true){
            return body.classList.add("dark-mode");
            //prob wrong here lol pick up after class
        }else{
            return body.classList.add("dark-mode");
        }
    }, [darkMode])
    
}

