import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import 'dotenv/config';
import fs from 'fs';
const docId = '1sMX4sZ_DilFHX_B7H1YSvI1bkzhiEZIKxThQzxDLKs0';
const languages = ['tw', 'en', 'kr'];

const getData = async (docId, languages) => {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const doc = new GoogleSpreadsheet(docId, serviceAccountAuth);

  await doc.loadInfo();
  const result = {};
  languages.forEach((lang) => {
    result[lang] = {};
  });

  for (let i = 0; i < doc.sheetCount; i++) {
    const sheet = doc.sheetsByIndex[i];
    const rows = await sheet.getRows();
    rows.forEach((row) => {
      const key = row.get('key');
      if (key) {
        languages.forEach((lang) => {
          result[lang][`${sheet.title}_${key}`] = row.get(lang);
        });
      }
    });
  }
  languages.forEach((lang) => {
    const data = JSON.stringify(result[lang], null, 2);
    fs.writeFileSync(`./src/localization/${lang}.json`, data);
  });
};

getData(docId, languages);
