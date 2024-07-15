// 创建包含24个值为0、24个值为1、24个值为2、24个值为3的无符号32位整数数组
let values = [];
for (let i = 0; i < 24; i++) {
  values.push(0);
}
for (let i = 0; i < 24; i++) {
  values.push(1);
}
for (let i = 0; i < 24; i++) {
  values.push(2);
}
for (let i = 0; i < 24; i++) {
  values.push(3);
}

// 将数组转换为二进制数据
let buffer = new ArrayBuffer(values.length * 4);
let uint32Array = new Uint32Array(buffer);
for (let i = 0; i < values.length; i++) {
  uint32Array[i] = values[i];
}

// 将二进制数据编码为 Base64
let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));

console.log(base64String);

// 创建 glTF 结构
let gltf = {
  asset: {
    version: "2.0"
  },
  buffers: [
    {
      uri: `data:application/octet-stream;base64,${base64String}`,
      byteLength: uint32Array.byteLength
    }
  ],
  bufferViews: [
    { buffer: 0, byteOffset: 0, byteLength: uint32Array.byteLength, byteStride: 4 }
  ],
  accessors: [
    { bufferView: 0, byteOffset: 0, componentType: 5125, count: values.length, type: "SCALAR", max: [3], min: [0] }
  ]
};

console.log(JSON.stringify(gltf, null, 2));
