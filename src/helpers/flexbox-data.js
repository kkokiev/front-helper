const flexWrapData = [
  {
    title: 'Direction',
    subtitle: 'flex-direction',
    info: 'defining the direction flex items are placed in the flex container',
    buttons: ['row', 'row-reverse', 'column', 'column-reverse']
  },
  {
    title: 'Wrap ',
    subtitle: 'flex-wrap',
    info: 'By default, flex items will all try to fit onto one line.',
    buttons: ['nowrap', 'wrap', 'wrap-reverse']
  },
  {
    title: 'Horizontal align',
    subtitle: 'justify-content',
    info: 'This defines the alignment along the main axis.',
    buttons: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
  },
  {
    title: 'Cross align',
    subtitle: 'align-items',
    info: 'Vertical align within line.',
    buttons: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
  },
  {
    title: 'Vertical align',
    subtitle: 'align-content',
    info: 'Vertical align within container, has no effect when there is only one line of flex items',
    buttons: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']
  }
];

export default flexWrapData;
