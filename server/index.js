const { launch, getStream } = require('puppeteer-stream');
const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');

const file = fs.createWriteStream(__dirname + '/test.webm');
var mp3Duration = require('mp3-duration');
const { getVideoDurationInSeconds } = require('get-video-duration');
// async function test() {
//   const browser = await launch({
//     headless: true,
//     defaultViewport: null,
// args: [
//   '--window-size=1920,1080',
//   '--window-position=1921,0',
//   '--autoplay-policy=no-user-gesture-required',
// ],
//     ignoreDefaultArgs: ['--mute-audio'],
//   });

//   const page = await browser.newPage();
//   // await page.goto('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
//   await page.goto('http://localhost:3000/');
//   const stream = await getStream(page, { audio: true, video: true });
//   console.log('recording');

//   stream.pipe(file);
//   setTimeout(async () => {
//     await stream.destroy();
//     file.close();
//     console.log('finished');
//   }, 1000 * 10);
// }

// test();

// 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

const captureVideo = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  let closeCalled = false;

  let msgCollection = [];

  let outputFileName = './report/video/newtest7.mp4';

  await page.exposeFunction('onMessageReceivedEvent', async (e) => {
    console.log(`${e.type} fired`, e.data || '');
    msgCollection.push(e.data);
    if (e.data && e.data.type && e.data.type === 'START') {
      await recorder.start(outputFileName); // supports extension - mp4, avi, webm and mov
    }
    if (e.data && e.data.type && e.data.type === 'END') {
      await recorder.stop();
      await browser.close();
      await fileMerge(outputFileName);
      console.log('Close called', closeCalled);
    }
  });

  const listenFor = async (type) => {
    return page.evaluateOnNewDocument((type) => {
      window.addEventListener(type, (e) => {
        console.log('recieved', e.data.type);

        window.onMessageReceivedEvent({ type, data: e.data });
      });
    }, type);
  };

  await listenFor('message');

  const Config = {
    fps: 60,
    videoPreset: 'veryslow',
    videoBitrate: 2668,
  };

  const recorder = new PuppeteerScreenRecorder(page, Config);
  await page.goto('http://localhost:3000');

  await page.evaluate(() => {
    document.querySelector('.foo').click();
  });

  // await page.click('[data-testid="uc-accept-all-button"]');

  // setTimeout(async () => {
  //   console.log('Called');
  //   await recorder.stop();
  //   await browser.close();
  //   console.log('MSG COLLECTION', msgCollection);
  //   console.log('finished');
  // }, 1000 * 10);
};

captureVideo();

const fileMerge = async (mp3FileName) => {
  console.log('called parse');

  const originalAudioFile = 'sample-5.mp3';

  // getting the mp3 file duration
  const originalAudioDuration = await mp3Duration(originalAudioFile);
  console.log(originalAudioDuration);

  const generatedVideoDuration = await getVideoDurationInSeconds(mp3FileName);
  console.log(generatedVideoDuration);

  const timeDiff = Math.floor(generatedVideoDuration - originalAudioDuration);

  console.log(timeDiff);

  const croppedVideoFileName = 'cut4.mp4';

  ffmpeg({ source: mp3FileName })
    .setStartTime(timeDiff)
    .saveToFile(croppedVideoFileName)
    .on('end', () => {
      console.log('Called to merge');
      ffmpeg()
        .addInput(croppedVideoFileName)
        .addInput(originalAudioFile)
        .saveToFile('./temp/out8.mp4');
    });

  // merging the two videos

  // await ffmpeg()
  //   .addInput(croppedVideoFileName)
  //   .addInput(originalAudioFile)
  //   .saveToFile('./temp/out.mp4').then(()=>{

  //   });

  // await ffmpeg()
  //   .input('/home/sachin/Desktop/pup/report/video/simple2134.mp4')
  //   .input('/home/sachin/Desktop/pup/file_example_MP3_700KB.mp3')
  //   .mergeToFile('./temp')
  //   .on('end', function () {
  //     console.log('files have been merged succesfully');
  //   })
  //   .on('error', function (err) {
  //     console.log('an error happened: ' + err.message);
  //   });
};

// fileMerge();
