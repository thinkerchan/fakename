// src/index.js
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import md5 from 'md5';
import { XING, MING } from './fakename-data.js';

class Fakename {
  constructor() {
    this.fpPromise = FingerprintJS.load();
  }

  async generate(config) {
    const fp = await this.fpPromise;
    const result = await fp.get();
    const visitorId = result.visitorId;

    const hashMd5 = md5(visitorId);
    const hashNum = BigInt(`0x${hashMd5}`);
    const last9Digits = hashNum % 1000000000n;

    const nameIndices = last9Digits.toString().padStart(9, '0').split('').map(Number);
    const xingIndex = nameIndices[0] * 100 + nameIndices[1] * 10 + nameIndices[2];
    const mingIndex = nameIndices[3] * 100 + nameIndices[4] * 10 + nameIndices[5];
    const gender = config.gender !== undefined ? Number(Boolean(config.gender)) : (nameIndices[8] > 4 ? 0 : 1);

    const xing = XING[xingIndex % XING.length];
    const ming = MING[gender][mingIndex % MING[gender].length];

    const nickname = xing + ming;
    return { nickname, gender,visitorId };
  }
}

export default Fakename;

if (typeof window !== 'undefined') {
  window.Fakename = Fakename;
}