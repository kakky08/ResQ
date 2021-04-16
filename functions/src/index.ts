import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
// 初期化
admin.initializeApp();
// 実行速度を早めるために
const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body)
  })
}

export const addDataset = functions.https.onRequest(async (req: any, res: any) => {
  if (req.method !== 'POST') {
    // 失敗した時のメッセージ
    sendResponse(res, 405, { error: 'Invalid Request!' });
  } else {
    const dataset = req.body
    for (const key of Object.keys(dataset)) {
      const data = dataset[key]

      // questionにquestions(ファイル)を作りdoc(documentにキー(initなど)を)とdata(answerなど)をセットする
      await db.collection('questions').doc(key).set(data)
    }
    // 成功した時のメッセージ
    sendResponse(res, 200, { message: 'Successfully added dataset!'})
    }
  })
