import { useRef } from 'react';
import { Animated } from 'react-native';


export const useAnimation = () => {
    
    const opacity  = useRef( new Animated.Value(0) ).current;

    const fadeIn = ( duration: number = 2000 ) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true
            }
        ).start();
    }




    


    
    
    
    return {
        opacity,
        fadeIn,
        fadeOut,
        
    }
}
