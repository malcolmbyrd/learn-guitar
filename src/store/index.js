import React from "react";
import { createStore } from 'redux';
import Reducer from './reducer';

export let Store = createStore(Reducer);
