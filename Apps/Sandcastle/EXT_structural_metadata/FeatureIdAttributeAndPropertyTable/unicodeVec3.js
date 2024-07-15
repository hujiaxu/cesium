// Base64 to ArrayBuffer
const base64 = "AAABAAIAAQADAAIABAAFAAYABQAHAAYACAAJAAoACQALAAoADAANAA4ADQAPAA4AAAAAAAAAAAAAAAAAZmbmPgAAAAAAAAAAAAAAAGZm5j4AAAAAZmbmPmZm5j4AAAAAzcwMPwAAAAAAAAAAAACAPwAAAAAAAAAAzcwMP2Zm5j4AAAAAAACAP2Zm5j4AAAAAAAAAAM3MDD8AAAAAZmbmPs3MDD8AAAAAAAAAAAAAgD8AAAAAZmbmPgAAgD8AAAAAzcwMP83MDD8AAAAAAACAP83MDD8AAAAAzcwMPwAAgD8AAAAAAACAPwAAgD8AAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAACAAAAAgAAAAIAAAACAAAAAwAAAAMAAAADAAAAAwAAAA==";
const binaryString = atob(base64);
const len = binaryString.length;
const bytes = new Uint8Array(len);
for (let i = 0; i < len; i++) {
  bytes[i] = binaryString.charCodeAt(i);
}
const buffer = bytes.buffer;
const bufferView = {
  "buffer": 0,
  "byteOffset": 240,
  "byteLength": 192,
  "target": 34962
};

const accessor = {
  "bufferView": 2,
  "byteOffset": 0,
  "componentType": 5126,
  "count": 16,
  "type": "VEC3"
};

// 从偏移量240开始解析数据
const byteOffset = bufferView.byteOffset + accessor.byteOffset;
const float32Array = new Float32Array(buffer, byteOffset, accessor.count * 3); // 16个VEC3，每个VEC3有3个float

// 打印解析出的VEC3数据
for (let i = 0; i < float32Array.length; i += 3) {
  console.log(`VEC3 [${i/3}]: (${float32Array[i]}, ${float32Array[i+1]}, ${float32Array[i+2]})`);
}
