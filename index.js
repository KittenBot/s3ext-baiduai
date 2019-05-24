
// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACZCAMAAAA7DnmpAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURQAAACMZ3CQa3CYc3Cce3Sge3Ssh3Swi3Swj3i0k3i8m3jAn3jIo3jMq3zQr3zUs3zcu3zgv3zkw3zkw4Dsy4Dwz4D004D834UE44UM64UQ74UU84UY+4khA4kpC4kxD4k1F409H41JK41JL5FNM5FZO5FlR5VtU5VxV5V9X5V9Y5mFa5mNc5mRd5mVe52dg52hh52li52tl6G5n6G9o6HJr6HNt6XRu6Xdw6Xhx6Xlz6nt16n136n546n9664F764J864R+64R/7IaB7IiD7IuF7IuG7Y2I7Y+K7ZCL7ZGM7ZGM7pOO7pSP7paR7pmU75uW75yX752Y75+b8KCc8KSf8KSg8aej8aik8auo8q+r8rGt87Kv87Sx87ay87e09Lm29Lu49Ly59L+89cG+9cPB9sXD9sfE9snG9svJ983L98/M99DN99DO+NPR+NTS+NbU+NjW+drY+dza+d7d+uDf+uLg+uPi++Tj++Xk++fm++jn++no++no/Ovq/Ozr/O3s/O/u/PHw/fX0/fn5/vr6/v7+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPvhOJ4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjb9TgnoAAAK3UlEQVR4Xu2b+VcUSRaFp8AqhkZlWhHLodVGxwUX3HW0BbvdHVsZNxrcW0SlVUQE2mVQxOn8t3NeRN7MjBfxIioA58yZc/h+Im68fHXJyiXiRdSf0v89yx4ylj1kLHvIWPaQsewhY9lDxv+fh/nB3rXVWufBO2h/HRbk4WJrBbTfhPQ1WICHye9gQLPtX5CXTryHZ234dLBuCh0SkzdOHj47gkYjoj28aMFnF3S8R5fD0+1ZRPslCGFiPcx1ZGlNutFn8fkQ+on2BxBDxHroRVLGGXQyxteiN+M85ACRHh4gI6f5FboNHv8ZnTmH0OEn0sMGJLToQXfJSBVdJb3o8hLn4TbSOTxHQI575RKn0ekjzsMWZHM4ggAwuwY651d0e4jyMIlcLjVEANyTNu2f0S8T5eEfyCXA3hz/hOjQhwCZKA9/QyqBowhRzNQgOjTPIEQkykMzUgmsQ4hiPzSBfoSIxHgYQyKROQSl6XMoEt8gRiTGwyASiTxFUJoegCJyH0ESMR7OIY/IMILS2cA3Vqn8HVESMR6OIY/IzwhKr0KQqSNKIsaD+L7KOYegdCMEmSZEScR42I08IvkVP4u2j8CIJ8bDXqQR+QlBj9H2Ibxic2I8BC/4/LsI3jzEa8QJxHg4gTQi1xB0GW0f3oFfnIdg+rsIOoO2h1aEScR48I4eFC8Q1Ie2B3e0UxLj4TXySBT3XD8ED6ERdoyH1B4iGmxGSPhhWqk8QZhElIfAA6IYp4Ufk6sQJRLlIXDfFf/fLxBkgoOYKA9z3tfRt4hI0ydQZCYQJWJ5mL/dt72+aedpa6pozJw4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";
const blockIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACZCAMAAAA7DnmpAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURQAAACMZ3CQa3CYc3Cce3Sge3Ssh3Swi3Swj3i0k3i8m3jAn3jIo3jMq3zQr3zUs3zcu3zgv3zkw3zkw4Dsy4Dwz4D004D834UE44UM64UQ74UU84UY+4khA4kpC4kxD4k1F409H41JK41JL5FNM5FZO5FlR5VtU5VxV5V9X5V9Y5mFa5mNc5mRd5mVe52dg52hh52li52tl6G5n6G9o6HJr6HNt6XRu6Xdw6Xhx6Xlz6nt16n136n546n9664F764J864R+64R/7IaB7IiD7IuF7IuG7Y2I7Y+K7ZCL7ZGM7ZGM7pOO7pSP7paR7pmU75uW75yX752Y75+b8KCc8KSf8KSg8aej8aik8auo8q+r8rGt87Kv87Sx87ay87e09Lm29Lu49Ly59L+89cG+9cPB9sXD9sfE9snG9svJ983L98/M99DN99DO+NPR+NTS+NbU+NjW+drY+dza+d7d+uDf+uLg+uPi++Tj++Xk++fm++jn++no++no/Ovq/Ozr/O3s/O/u/PHw/fX0/fn5/vr6/v7+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPvhOJ4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjb9TgnoAAAK3UlEQVR4Xu2b+VcUSRaFp8AqhkZlWhHLodVGxwUX3HW0BbvdHVsZNxrcW0SlVUQE2mVQxOn8t3NeRN7MjBfxIioA58yZc/h+Im68fHXJyiXiRdSf0v89yx4ylj1kLHvIWPaQsewhY9lDxv+fh/nB3rXVWufBO2h/HRbk4WJrBbTfhPQ1WICHye9gQLPtX5CXTryHZ234dLBuCh0SkzdOHj47gkYjoj28aMFnF3S8R5fD0+1ZRPslCGFiPcx1ZGlNutFn8fkQ+on2BxBDxHroRVLGGXQyxteiN+M85ACRHh4gI6f5FboNHv8ZnTmH0OEn0sMGJLToQXfJSBVdJb3o8hLn4TbSOTxHQI575RKn0ekjzsMWZHM4ggAwuwY651d0e4jyMIlcLjVEANyTNu2f0S8T5eEfyCXA3hz/hOjQhwCZKA9/QyqBowhRzNQgOjTPIEQkykMzUgmsQ4hiPzSBfoSIxHgYQyKROQSl6XMoEt8gRiTGwyASiTxFUJoegCJyH0ESMR7OIY/IMILS2cA3Vqn8HVESMR6OIY/IzwhKr0KQqSNKIsaD+L7KOYegdCMEmSZEScR42I08IvkVP4u2j8CIJ8bDXqQR+QlBj9H2Ibxic2I8BC/4/LsI3jzEa8QJxHg4gTQi1xB0GW0f3oFfnIdg+rsIOoO2h1aEScR48I4eFC8Q1Ie2B3e0UxLj4TXySBT3XD8ED6ERdoyH1B4iGmxGSPhhWqk8QZhElIfAA6IYp4Ufk6sQJRLlIXDfFf/fLxBkgoOYKA9z3tfRt4hI0ydQZCYQJWJ5mL/dt72+aedpa6pozJw4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";

class BaiduAI{
  constructor (runtime){
    this.runtime = runtime;
    // communication related
    this.comm = runtime.ioDevices.comm;
    this.session = null;
    this.runtime.registerPeripheralExtension('BaiduAI', this);
    // session callbacks
    this.reporter = null;
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.write = this.write.bind(this);
    // string op
    this.decoder = new TextDecoder();
    this.lineBuffer = '';
  }

  onclose (){
    this.session = null;
  }

  write (data, parser = null){
    if (this.session){
      return new Promise(resolve => {
        if (parser){
          this.reporter = {
            parser,
            resolve
          }
        }
        this.session.write(data);
      })
    }
  }

  onmessage (data){
    const dataStr = this.decoder.decode(data);
    this.lineBuffer += dataStr;
    if (this.lineBuffer.indexOf('\n') !== -1){
      const lines = this.lineBuffer.split('\n');
      this.lineBuffer = lines.pop();
      for (const l of lines){
        if (this.reporter){
          const {parser, resolve} = this.reporter;
          resolve(parser(l));
        };
      }
    }
  }

  scan (){
    this.comm.getDeviceList().then(result => {
        this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
    });
  }

  getInfo (){
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
          text: 'Listen Speech'
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
        }
      ]
    }
  }

listenspeech (args, util){

  return this.write(`M0 \n`);
}

whenheard (args, util){
  const SPEECH = args.SPEECH;

  return this.write(`M0 \n`);
}

speechout (args, util){

  return this.write(`M0 \n`);
}

}

module.exports = BaiduAI;
