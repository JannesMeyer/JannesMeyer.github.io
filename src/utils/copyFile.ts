import mkdirp from 'mkdirp';
import fs from 'fs';
import path from 'path';

/** Copy a file to the destination */
export function copyFile(source: string, destination: string) {
  // Make sure the directory exists
  mkdirp.sync(path.dirname(destination));

  // Copy via streams
  let rs = fs.createReadStream(source);
  let ws = fs.createWriteStream(destination);
  rs.pipe(ws);
}