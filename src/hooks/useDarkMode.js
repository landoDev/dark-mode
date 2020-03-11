import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    useEffect(()=>{
        const body = document.getElementsByTagName("body")
        if(darkMode === true){
            return body.classList.add("dark-mode");
            setDarkMode()
            //prob wrong here lol pick up after class
        }else{
            return null;
        }
    }, [darkMode])
    

    return [darkMode]
}

