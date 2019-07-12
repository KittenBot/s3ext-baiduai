// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACZCAMAAAA7DnmpAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURQAAACMZ3CQa3CYc3Cce3Sge3Ssh3Swi3Swj3i0k3i8m3jAn3jIo3jMq3zQr3zUs3zcu3zgv3zkw3zkw4Dsy4Dwz4D004D834UE44UM64UQ74UU84UY+4khA4kpC4kxD4k1F409H41JK41JL5FNM5FZO5FlR5VtU5VxV5V9X5V9Y5mFa5mNc5mRd5mVe52dg52hh52li52tl6G5n6G9o6HJr6HNt6XRu6Xdw6Xhx6Xlz6nt16n136n546n9664F764J864R+64R/7IaB7IiD7IuF7IuG7Y2I7Y+K7ZCL7ZGM7ZGM7pOO7pSP7paR7pmU75uW75yX752Y75+b8KCc8KSf8KSg8aej8aik8auo8q+r8rGt87Kv87Sx87ay87e09Lm29Lu49Ly59L+89cG+9cPB9sXD9sfE9snG9svJ983L98/M99DN99DO+NPR+NTS+NbU+NjW+drY+dza+d7d+uDf+uLg+uPi++Tj++Xk++fm++jn++no++no/Ovq/Ozr/O3s/O/u/PHw/fX0/fn5/vr6/v7+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPvhOJ4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjb9TgnoAAAK3UlEQVR4Xu2b+VcUSRaFp8AqhkZlWhHLodVGxwUX3HW0BbvdHVsZNxrcW0SlVUQE2mVQxOn8t3NeRN7MjBfxIioA58yZc/h+Im68fHXJyiXiRdSf0v89yx4ylj1kLHvIWPaQsewhY9lDxv+fh/nB3rXVWufBO2h/HRbk4WJrBbTfhPQ1WICHye9gQLPtX5CXTryHZ234dLBuCh0SkzdOHj47gkYjoj28aMFnF3S8R5fD0+1ZRPslCGFiPcx1ZGlNutFn8fkQ+on2BxBDxHroRVLGGXQyxteiN+M85ACRHh4gI6f5FboNHv8ZnTmH0OEn0sMGJLToQXfJSBVdJb3o8hLn4TbSOTxHQI575RKn0ekjzsMWZHM4ggAwuwY651d0e4jyMIlcLjVEANyTNu2f0S8T5eEfyCXA3hz/hOjQhwCZKA9/QyqBowhRzNQgOjTPIEQkykMzUgmsQ4hiPzSBfoSIxHgYQyKROQSl6XMoEt8gRiTGwyASiTxFUJoegCJyH0ESMR7OIY/IMILS2cA3Vqn8HVESMR6OIY/IzwhKr0KQqSNKIsaD+L7KOYegdCMEmSZEScR42I08IvkVP4u2j8CIJ8bDXqQR+QlBj9H2Ibxic2I8BC/4/LsI3jzEa8QJxHg4gTQi1xB0GW0f3oFfnIdg+rsIOoO2h1aEScR48I4eFC8Q1Ie2B3e0UxLj4TXySBT3XD8ED6ERdoyH1B4iGmxGSPhhWqk8QZhElIfAA6IYp4Ufk6sQJRLlIXDfFf/fLxBkgoOYKA9z3tfRt4hI0ydQZCYQJWJ5mL/dt72+aedpa6pozJw4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";
const blockIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACZCAMAAAA7DnmpAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURQAAACMZ3CQa3CYc3Cce3Sge3Ssh3Swi3Swj3i0k3i8m3jAn3jIo3jMq3zQr3zUs3zcu3zgv3zkw3zkw4Dsy4Dwz4D004D834UE44UM64UQ74UU84UY+4khA4kpC4kxD4k1F409H41JK41JL5FNM5FZO5FlR5VtU5VxV5V9X5V9Y5mFa5mNc5mRd5mVe52dg52hh52li52tl6G5n6G9o6HJr6HNt6XRu6Xdw6Xhx6Xlz6nt16n136n546n9664F764J864R+64R/7IaB7IiD7IuF7IuG7Y2I7Y+K7ZCL7ZGM7ZGM7pOO7pSP7paR7pmU75uW75yX752Y75+b8KCc8KSf8KSg8aej8aik8auo8q+r8rGt87Kv87Sx87ay87e09Lm29Lu49Ly59L+89cG+9cPB9sXD9sfE9snG9svJ983L98/M99DN99DO+NPR+NTS+NbU+NjW+drY+dza+d7d+uDf+uLg+uPi++Tj++Xk++fm++jn++no++no/Ovq/Ozr/O3s/O/u/PHw/fX0/fn5/vr6/v7+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPvhOJ4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjb9TgnoAAAK3UlEQVR4Xu2b+VcUSRaFp8AqhkZlWhHLodVGxwUX3HW0BbvdHVsZNxrcW0SlVUQE2mVQxOn8t3NeRN7MjBfxIioA58yZc/h+Im68fHXJyiXiRdSf0v89yx4ylj1kLHvIWPaQsewhY9lDxv+fh/nB3rXVWufBO2h/HRbk4WJrBbTfhPQ1WICHye9gQLPtX5CXTryHZ234dLBuCh0SkzdOHj47gkYjoj28aMFnF3S8R5fD0+1ZRPslCGFiPcx1ZGlNutFn8fkQ+on2BxBDxHroRVLGGXQyxteiN+M85ACRHh4gI6f5FboNHv8ZnTmH0OEn0sMGJLToQXfJSBVdJb3o8hLn4TbSOTxHQI575RKn0ekjzsMWZHM4ggAwuwY651d0e4jyMIlcLjVEANyTNu2f0S8T5eEfyCXA3hz/hOjQhwCZKA9/QyqBowhRzNQgOjTPIEQkykMzUgmsQ4hiPzSBfoSIxHgYQyKROQSl6XMoEt8gRiTGwyASiTxFUJoegCJyH0ESMR7OIY/IMILS2cA3Vqn8HVESMR6OIY/IzwhKr0KQqSNKIsaD+L7KOYegdCMEmSZEScR42I08IvkVP4u2j8CIJ8bDXqQR+QlBj9H2Ibxic2I8BC/4/LsI3jzEa8QJxHg4gTQi1xB0GW0f3oFfnIdg+rsIOoO2h1aEScR48I4eFC8Q1Ie2B3e0UxLj4TXySBT3XD8ED6ERdoyH1B4iGmxGSPhhWqk8QZhElIfAA6IYp4Ufk6sQJRLlIXDfFf/fLxBkgoOYKA9z3tfRt4hI0ydQZCYQJWJ5mL/dt72+aedpa6pozJw4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";

const Resampler = require('./resampler.js');

const BUFSIZE = 8192;

const accessTokenVoice = "24.b21ac2bc95a3eb1668eb311da8f90bd4.2592000.1564995754.282335-16328058";
const accessTokenWrite = "25.763947bde8b432ae2fc704ca14bcaa9e.315360000.1877764204.282335-16440024";
const accessTokenVocob = "24.fdde5d6ef5777056b284da7ee363dc84.2592000.1564995927.282335-16726540";
const accessTokenImage = "24.46c6417401420b96509fdd009653035d.2592000.1564999599.282335-16726823";

const recognizeMap = {
    'ingredient': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/classify/ingredient',
    'plant': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/plant',
    'dish': 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish',
    'animal': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/animal',
    'redwine': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/redwine',
    'flower': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/flower',
    'car': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/car',
    'landmark': 'https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark'
}

class BaiduAI {
  constructor(runtime) {
    this.runtime = runtime;
    this.fs = runtime.ioDevices.fs;
    this._context = null;
    this._resampler = null;
    this._onSpeechDone = null;
    this._onSpeechFail = null;
    this.initMicroPhone = this.initMicroPhone.bind(this);
    this._processAudioCallback = this._processAudioCallback.bind(this);
    this._resetListening = this._resetListening.bind(this);
    this._recognize = this._recognize.bind(this);
    this._recognizeSuccess = this._recognizeSuccess.bind(this);

    this.runtime.on('PROJECT_STOP_ALL', this._resetListening.bind(this));

    this.initMicroPhone();
    this.bufferArray = [];

    this._recognizeResult;

  }

  initMicroPhone() {
    if (!this._context) {
      this._context = new (window.AudioContext || window.webkitAudioContext)();
      this._resampler = new Resampler(this._context.sampleRate, 16000, 1, BUFSIZE);
    }
    this._audioPromise = navigator.mediaDevices.getUserMedia({
      audio: true
    });

    this._audioPromise.then(stream => {
      this._micStream = stream;
    }).catch(e => {
      log.error(`Problem connecting to microphone:  ${e}`);
    });

  }


  getInfo() {
    return {
      id: 'BaiduAI',
      name: 'BaiduAI',
      color1: '#0FBD8C',
      color2: '#0DA57A',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'listenspeech',
          blockType: BlockType.COMMAND,
          text: 'Listen Speech [TIMEOUT]',
          arguments: {
            TIMEOUT: {
              type: ArgumentType.NUMBER,
              defaultValue: 6
            }
          },
        },
        {
          opcode: 'whenheard',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          arguments: {
            SPEECH: {
              type: ArgumentType.STRING
            }
          },
          text: 'When Heard [SPEECH]'
        },
        {
          opcode: 'speechout',
          blockType: BlockType.REPORTER,
          text: 'Speech Text'
        },
        '---',
        {
          opcode: 'writecunlian',
          blockType: BlockType.REPORTER,
          text: 'Write CUNLIAN [KEY]',
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: "小喵"
            }
          },
        },
        {
          opcode: 'writepoem',
          blockType: BlockType.REPORTER,
          text: 'Write Poem [KEY]',
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: "小喵"
            }
          },
        },
        '---',
        {
          opcode: 'recognizeItem',
          blockType: BlockType.COMMAND,
          text: 'Recognize Type[TYPE]',
          arguments: {
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'typemenu',
              defaultValue: "ingredient"
            }
          },
        },
        {
          opcode: 'recognizeDone',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: 'When Recognize Done'
        },
        {
          opcode: 'recognizeResult',
          blockType: BlockType.REPORTER,
          isEdgeActivated: false,
          text: 'Recognize Result'
        },
        {
          opcode: 'recognizeOpenBaike',
          blockType: BlockType.COMMAND,
          isEdgeActivated: false,
          text: 'Open Baike Link'
        },
      ],
      menus: {
        typemenu: ['ingredient', 'plant','dish','animal','redwine', 'flower','car', 'landmark']
      },
      translation_map: {
        'zh-cn': {
          listenspeech: '听候语音输入 超时[TIMEOUT]',
          whenheard: '当听到 [SPEECH]',
          speechout: '语音输入',
          writecunlian: "写春联 [KEY]",
          writepoem: "写诗 [KEY]",
          recognizeItem: "识别 类别[TYPE]",
          typemenu: {
              ingredient: "蔬菜",
              plant: "盆栽",
              dish: '菜品',
              animal: '动物',
              redwine: '红酒',
              flower: '花',
              car: '汽车',
              landmark: '地标',
          },
          recognizeDone: "当识别完成",
          recognizeResult: "识别结果",
          recognizeOpenBaike: "识别结果@百度百科",
        },
        'zh-tw': {
          listenspeech: '聽候語音輸入 超時[TIMEOUT]',
          whenheard: '當聽到 [SPEECH]',
          speechout: '語音輸入',
          writecunlian: "寫春聯 [KEY]",
          writepoem: "寫詩 [KEY]",
          recognizeItem: "辯識 類別[TYPE]",
          typemenu: {
              ingredient: "蔬菜",
              plant: "盆栽",
              dish: '菜品',
              animal: '動物',
              redwine: '紅酒',
              flower: '花',
              car: '汽車',
              landmark: '地標',
          },
          recognizeDone: "當辯識完成",
          recognizeResult: "辯識結果",
          recognizeOpenBaike: "識別結果@百度百科",
        }
      }
    }
  }

  _processAudioCallback(e) {
    var resampled = this._resampler.resample(e.inputBuffer.getChannelData(0))
    this.bufferArray.push.apply(this.bufferArray, resampled);
  }

  _recognizeSuccess(txt) {

    this.result = txt;
    if (this._onSpeechDone) {
      this._onSpeechDone();
    }
    const words = [];
    this.runtime.targets.forEach(target => {
      target.blocks._scripts.forEach(id => {
        const b = target.blocks.getBlock(id);
        if (b.opcode === 'BaiduAI_whenheard') {
          // Grab the text from the hat block's shadow.
          const inputId = b.inputs.SPEECH.block;
          const inputBlock = target.blocks.getBlock(inputId);
          // Only grab the value from text blocks. This means we'll
          // miss some. e.g. values in variables or other reporters.
          if (inputBlock.opcode === 'text') {
            const word = target.blocks.getBlock(inputId).fields.TEXT.value;
            if (txt.indexOf(word) > -1) {
              this.runtime.startHats('BaiduAI_whenheard', { TEXT: word });
              words.push(word);
            }
          }
        }
      });
    });
  }

  _recognize() {
    const _recognizeSuccess = this._recognizeSuccess;
    const _onSpeechFail = this._onSpeechFail;
    this._resetListening();
    // var pcm = floatTo16BitPCM(this.bufferArray);
    // console.log("total", pcm);
    // build wav file
    var dataLength = this.bufferArray.length * 2; // 16bit
    var buffer = new ArrayBuffer(dataLength);
    var data = new DataView(buffer);
    var offset = 0;

    for (var i = 0; i < this.bufferArray.length; i++ , offset += 2) {
      var s = Math.max(-1, Math.min(1, this.bufferArray[i]));
      data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }

    var blob = new Blob([data], { type: 'audio/wav' });
    var reader = new FileReader();
    const _this = this;
    reader.onload = function () {
      var dataUrl = reader.result;
      var base64 = dataUrl.split(',')[1];
      // console.log(base64);
      const reqJson = {
        "format": "pcm",
        "rate": 16000,
        "dev_pid": 1537,
        "channel": 1,
        "token": accessTokenVoice,
        "cuid": "kittenblock",
        "len": dataLength,
        "speech": base64
      }
      fetch("http://vop.baidu.com/server_api", {
        body: JSON.stringify(reqJson),
        headers: {
          'content-type': 'application/json'
        },
        method: "POST"
      }).then(res => res.json()).then(ret => {
        console.log(ret);
        if (ret.err_no === 0) {
          _recognizeSuccess(ret.result[0]);
        } else {
          if (_onSpeechFail) {
            _onSpeechFail(ret.err_msg);
          }
        }
      });
    };
    reader.readAsDataURL(blob);

  }

  _resetListening() {
    this.runtime.emitMicListening(false);
    // Note that this can be called before any Listen And Wait block did setup,
    // so check that things exist before disconnecting them.
    if (this._context) {
      this._context.suspend.bind(this._context);
    }
    // This is called on green flag to reset things that may never have existed
    // in the first place. Do a bunch of checks.
    if (this._scriptNode) {
      this._scriptNode.removeEventListener('audioprocess', this._processAudioCallback);
      this._scriptNode.disconnect();
    }
    if (this._sourceNode) {
      this._sourceNode.disconnect();
    }

  }

  listenspeech(args, util) {
    let timeout = parseInt(args.TIMEOUT, 10);
    timeout = timeout < 1 ? 1 : timeout;
    timeout = timeout > 60 ? 60 : timeout;
    this.runtime.emitMicListening(true);
    this.bufferArray = [];
    return new Promise((resolve, reject) => {
      this._sourceNode = this._context.createMediaStreamSource(this._micStream);
      this._scriptNode = this._context.createScriptProcessor(BUFSIZE, 1, 1);

      this._sourceNode.connect(this._scriptNode);
      this._scriptNode.addEventListener('audioprocess', this._processAudioCallback);
      this._scriptNode.connect(this._context.destination);
      setTimeout(this._recognize, timeout * 1000);
      this._onSpeechDone = resolve;
      this._onSpeechFail = reject;
    });
  }

  whenheard(args, util) {
    //const SPEECH = args.SPEECH;
    ///console.log("heart", args);
    return true;
  }

  speechout(args, util) {
    return this.result;
  }

  writecunlian(args, util) {
    return new Promise(resolve => {
      fetch(`https://aip.baidubce.com/rpc/2.0/nlp/v1/couplets?access_token=${accessTokenWrite}`, {
        body: JSON.stringify({
          "text": args.KEY,
          "index": 0,
        }),
        headers: {
          'content-type': 'application/json'
        },
        method: "POST"
      }).then(res => res.json()).then(ret => {
        const couplets = ret.couplets;
        resolve(`${couplets.first}, ${couplets.second}. ${couplets.center}`)
      });
    });
  }

  writepoem(args, util) {
    return new Promise(resolve => {
      fetch(`https://aip.baidubce.com/rpc/2.0/nlp/v1/poem?access_token=${accessTokenWrite}`, {
        body: JSON.stringify({
          "text": args.KEY,
          "index": 0,
        }),
        headers: {
          'content-type': 'application/json'
        },
        method: "POST"
      }).then(res => res.json()).then(ret => {
        const poem = ret.poem[0];
        resolve(`${poem.title}\n${poem.content}`)
      });
    });
  }

  recognizeItem (args, util){
    this._recognizeResult = null;
    const regType = args.TYPE;
    const img = util.ioQuery('fs', 'stageCanvasData', []).replace('data:image/png;base64,', '');
    const url = `${recognizeMap[regType]}?access_token=${accessTokenImage}`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'image='+ encodeURIComponent(img) + "&baike_num=1"
      }).then(res => res.json()).then(ret => {
        console.log('recognize', ret)
        resolve('')
        this._recognizeResult = ret.result;
        this.runtime.startHats('BaiduAI_recognizeDone', {});
      });
    });

  }

  recognizeDone (args, util){
    return true;
  }

  recognizeResult (args, util){
    if (this._recognizeResult && this._recognizeResult.length){
      return this._recognizeResult[0].name;
    }
  }

  recognizeOpenBaike (args, util){
    if (this._recognizeResult &&
      this._recognizeResult.length &&
      this._recognizeResult[0].baike_info
    ){
      this.fs.openSite(this._recognizeResult[0].baike_info.baike_url);
    }
  }

}

module.exports = BaiduAI;

// ref: http://0313.name/archives/300#comment-48
