import React from 'react';

import { sample } from '../../utils';
import { EN_WORDS } from '../../words-en';
import {PT_WORDS} from "../../words-ptbr";

function Game({lang}) {
  const answer = sample(lang === "EN" ? EN_WORDS : PT_WORDS);
  console.info({answer});
  return <>Put a game here!</>;
}

export default Game;
