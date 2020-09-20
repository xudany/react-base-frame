import React, {useEffect} from "react";

type Props = {
    label: string;
}

const Test = ({label}: Props) => {

    useEffect(() => {
        console.log(11111)
    }, []);


    return <div>test + {label}</div>
};

export default Test
