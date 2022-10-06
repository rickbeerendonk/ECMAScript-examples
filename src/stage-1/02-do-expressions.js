/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-do-expressions

const date = new Date();

// --- if ---

const time = date.getHours();

const messageIf = do {
  if (time < 12) {
    ('Good morning');
  } else {
    ('Good day');
  }
};

console.log(messageIf);

// --- switch ---

const month = date.getMonth();

const messageSwitch = do {
  switch (month) {
    case 11:
    case 0:
    case 1:
      'Winter';
      break;
    case 2:
    case 3:
    case 4:
      'Spring';
      break;
    case 5:
    case 6:
    case 7:
      'Summer';
      break;
    default:
      'Autumn';
      break;
  }
};

console.log(messageSwitch);
