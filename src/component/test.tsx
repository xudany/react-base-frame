import React, { useEffect } from 'react';

type Props = {
  label: string;
};

const Test = ({ label }: Props) => {
  useEffect(() => {
    const b;
    const a = 0;
    if (a == 0) {
      console.log(11111);
    }
  }, []);

  return <div>test + {label}</div>;
};

export default Test;
