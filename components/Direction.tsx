import React from 'react';
import {create} from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset} from '@material-ui/core/styles';

const jssRtl = create({plugins: [...jssPreset().plugins, rtl()]});
const jssLtr = create({plugins: [...jssPreset().plugins]});

const Direction: React.FC<{rtl: boolean}> = ({rtl, children}) => {

  return (
    <div dir={rtl ? 'rtl' : 'ltr'}>
      <StylesProvider jss={rtl ? jssRtl : jssLtr}>
          {children}
      </StylesProvider>
    </div>
  )
};

export default Direction;