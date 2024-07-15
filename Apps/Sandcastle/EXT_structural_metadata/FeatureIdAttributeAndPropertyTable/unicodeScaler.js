// 假设已加载的二进制数据
const base64String = "AAABAAIAAQADAAIABAAFAAYABQAHAAYACAAJAAoACQALAAoADAANAA4ADQAPAA4AAAAAAAAAAAAAAAAAZmbmPgAAAAAAAAAAAAAAAGZm5j4AAAAAZmbmPmZm5j4AAAAAzcwMPwAAAAAAAAAAAACAPwAAAAAAAAAAzcwMP2Zm5j4AAAAAAACAP2Zm5j4AAAAAAAAAAM3MDD8AAAAAZmbmPs3MDD8AAAAAAAAAAAAAgD8AAAAAZmbmPgAAgD8AAAAAzcwMP83MDD8AAAAAAACAP83MDD8AAAAAzcwMPwAAgD8AAAAAAACAPwAAgD8AAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAACAAAAAgAAAAIAAAACAAAAAwAAAAMAAAADAAAAAwAAAA==";
const binaryString = atob(base64String);
const buffer = new ArrayBuffer(binaryString.length);
const bufferView = new Uint8Array(buffer);

for (let i = 0; i < binaryString.length; i++) {
    bufferView[i] = binaryString.charCodeAt(i);
}

// 定义bufferView相关信息
const bufferViewInfo = {
    "buffer": 0,
    "byteOffset": 432,
    "byteLength": 64,
    "byteStride": 4,
    "target": 34962
};

// 定义accessor相关信息
const accessorInfo = {
    "bufferView": 3,
    "byteOffset": 0,
    "componentType": 5121, // UNSIGNED_BYTE
    "count": 16,
    "type": "SCALAR"
};

// 创建Uint8Array视图
const byteOffset = bufferViewInfo.byteOffset + accessorInfo.byteOffset;
const byteLength = accessorInfo.count * (accessorInfo.type === "VEC3" ? 3 : 1); // 这里假设VEC3
const stride = bufferViewInfo.byteStride || 1; // 若无byteStride，按紧密排列处理

const uint8Array = new Uint8Array(buffer, byteOffset, bufferViewInfo.byteLength);
console.log('uint8Array: ', uint8Array);

// 解析数据
const data = [];
for (let i = 0; i < accessorInfo.count; i++) {
    const index = i * stride;
    const value = uint8Array[index];
    data.push(value);
}

// 打印解析结果
console.log(data);
