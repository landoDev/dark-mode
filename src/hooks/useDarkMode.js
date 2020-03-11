import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    console.log('key', key)
    const [value, setValue] = useLocalStorage(key, initialValue);
    useEffect(()=>{
        console.log(value)
        if(value === true){
            const bodyHTML = document.getElementsByTagName("body")
            const body = bodyHTML[0].classList.add("dark-mode")
            return body;
            //prob wrong here lol pick up after class
        }else{
            const bodyHTML = document.getElementsByTagName("body")
            const body = bodyHTML[0].classList.remove("dark-mode")
            return body;
        }
    }, [value])
    
    console.log('new value', value)
    return [value, setValue]
}

