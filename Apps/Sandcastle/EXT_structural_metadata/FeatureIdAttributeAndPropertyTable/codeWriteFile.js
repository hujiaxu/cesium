import fs from 'fs';

// 创建1000x1000排列的VEC3数据
const rows = 1000;
const cols = 500;
const vec3Data = [];

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        vec3Data.push([i * 5, 0, j * 2]); // 假设VEC3的值为[i / 2, 0, j / 2]
    }
}

// 将VEC3数据转换为Float32Array
const float32Array = new Float32Array(rows * cols * 3);
for (let i = 0; i < vec3Data.length; i++) {
    float32Array[i * 3] = vec3Data[i][0];
    float32Array[i * 3 + 1] = vec3Data[i][1];
    float32Array[i * 3 + 2] = vec3Data[i][2];
}

// 将Float32Array转换为ArrayBuffer
const buffer = float32Array.buffer;

console.log(buffer.byteLength, 'buffer.byteLength')

// 将ArrayBuffer保存为.bin文件
fs.writeFileSync('component_100000.bin', Buffer.from(buffer));

// 创建GLTF JSON
const gltf = {
    asset: {
        version: "2.0"
    },
    buffers: [
        {
            byteLength: buffer.byteLength,
            uri: "data.bin" // 指定二进制文件的路径
        }
    ],
    bufferViews: [
        {
            buffer: 0,
            byteOffset: 0,
            byteLength: buffer.byteLength,
            target: 34962 // ARRAY_BUFFER
        }
    ],
    accessors: [
        {
            bufferView: 0,
            byteOffset: 0,
            componentType: 5126, // FLOAT
            count: rows * cols,
            type: "VEC3",
            max: [rows / 2, 0, cols / 2],
            min: [0, 0, 0]
        }
    ],
    meshes: [
        {
            primitives: [
                {
                    attributes: {
                        POSITION: 0
                    }
                }
            ]
        }
    ],
    scenes: [
        {
            nodes: [0]
        }
    ],
    nodes: [
        {
            mesh: 0
        }
    ],
    scene: 0
};

// 将GLTF JSON保存为.gltf文件
// fs.writeFileSync('model.gltf', JSON.stringify(gltf, null, 2));

// // 打印GLTF JSON
// console.log(JSON.stringify(gltf, null, 2));
