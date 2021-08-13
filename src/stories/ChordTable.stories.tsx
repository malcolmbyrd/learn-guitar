import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ChordTable from '../components/ChordTable';

const chordMock = {
  "strings": "X 0 4 5 5 X",
  "fingering": "X X 1 2 3 X",
  "chordName": "A,m,6,",
  "enharmonicChordName": "A,m,6,",
  "voicingID": "9223372037900374047",
  "tones": "A,C,E,F#"
};

export default {
  title: 'Components/ChordTable',
  component: ChordTable
} as ComponentMeta<typeof ChordTable>;

const Template: ComponentStory<typeof ChordTable> = (args) => <ChordTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  chord: chordMock
};
