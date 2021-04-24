import {Notes, colors} from './notes';
import * as yargs from 'yargs';

const notes :Notes = Notes.getNotes();

/**
 * Yargs execution of the add command. The corresponding command line options must be included
 */
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Notes\' title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body\'s title',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color\'s note. Blue on unknown color.\nOnly red, green, blue and yellow available',
      demandOption: true,
      type: 'string',
      default: 'blue',
    },
  },
  handler(argv) {
    let addColor: colors = colors.Blue;

    if (typeof argv.user === 'string' && typeof argv.color === 'string' &&
    typeof argv.body === 'string' && typeof argv.title === 'string') {
      Object.values(colors).forEach((element) => {
        if (element === argv.color) addColor = element;
      });

      notes.addNote(argv.user, argv.title, argv.body, addColor);
    }
  },
});

/**
 * Yargs execution of the modify command. The corresponding command line options must be included
 */
yargs.command( {
  command: 'modify',
  describe: 'Modify an exist note',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },

    title: {
      describe: 'Notes\' title',
      demandOption: true,
      type: 'string',
    },

    body: {
      describe: 'Body\'s title',
      demandOption: true,
      type: 'string',
    },

    color: {
      describe: 'Color\'s note. Blue on unknown color.',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv: any) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
    typeof argv.color === 'string' && typeof argv.body === 'string') {
      let modifyColor: colors = colors.Blue;

      Object.values(colors).forEach((element) => {
        if (element === argv.color) modifyColor = element;
      });
      notes.modifyNote(argv.user, argv.title, argv.body, modifyColor);
    }
  },
});

/**
 * Yargs execution of the remove command. The corresponding command line options must be included
 */
yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Notes\' title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      notes.removeNote(argv.user, argv.title);
    }
  },
});

/**
 * Yargs execution of the list command. The corresponding command line options must be included
 */
yargs.command({
  command: 'list',
  describe: 'List notes from a user',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      notes.listNotes(argv.user);
    }
  },
});

/**
 * Yargs execution of the read command. The corresponding command line options must be included
 */
yargs.command({
  command: 'read',
  describe: 'read an existing note',
  builder: {
    user: {
      describe: 'Username',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Notes\' title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      notes.readNote(argv.user, argv.title);
    }
  },
});

/**
 * Process arguments passed from command line to application
 */
yargs.parse();
