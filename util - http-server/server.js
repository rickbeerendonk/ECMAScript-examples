/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable no-console */

const childProcess = require('child_process');

const [, , portHttp = 8080, filePath] = process.argv;
const basePath = process.cwd();

// If filePath is given, we'll open that path in the browser
let extraUri = '';
if (filePath && filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  const extraPath = filePath.substring(basePath.length);
  extraUri = extraPath.split('\\').join('/');
}

const serverUri = `http://localhost:${portHttp}`;
const totalUri = `${serverUri}${extraUri}`;

// Start server
// See: https://github.com/indexzero/http-server/
/*const httpChild =*/ childProcess.spawn(
  'http-server',
  ['.', '-p', portHttp, '-c-1'],
  { shell: true, stdio: 'inherit' }
);

// Open browser
const command =
  process.platform === 'win32'
    ? `start "" "${totalUri}"`
    : /* process.platform === "darwin" */ `open "${totalUri}"`;
/*const browserChild =*/ childProcess.spawn(command, {
  shell: true,
  stdio: 'inherit'
});

//childProcess.exec(command, () => { console.log('exit'); process.exit(); });
