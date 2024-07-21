import React, { useRef } from "react";
import { FEATURES } from "../../constants";
import FeatureCard from "../FeatureCard/FeatureCard";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Groups2Icon from '@mui/icons-material/Groups2';
import ShieldIcon from '@mui/icons-material/Shield';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import {useScroll} from "framer-motion";
const Features = () => {
    const features = FEATURES;
    const icons = [FindInPageIcon, Groups2Icon, CloudSyncIcon, ShieldIcon];
    const refToDivWithCards = useRef(null);
    const {scrollYProgress} = useScroll({
        target: refToDivWithCards,
        offset: ["start start", "end end"],
    });
    return(
        <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center pt-[50vh]" ref={refToDivWithCards}>
            {
                features.map((feature, index) => {
                    const scaleToReach = 1 - ((features.length - index) * 0.05);
                    return <FeatureCard header={feature.header} description={feature.description} Icon={icons[index]} range={[index*0.25, 1]} scaleToReach={scaleToReach} scrollYProgress={scrollYProgress} index={index} key={index}/>
                })
            }
            </div>
        </div>
    );
}

export default Features;