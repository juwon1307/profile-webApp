import React from 'react';
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour} from './Data';
import { Infosection } from '../../components';

const Home = () => {
    return (
        <>
         <Infosection {...HomeObjOne} />
         <Infosection {...HomeObjTwo} /> 
         <Infosection {...HomeObjThree} />
         <Infosection {...HomeObjFour} />
        </>
        
    );

 };
    export default Home;