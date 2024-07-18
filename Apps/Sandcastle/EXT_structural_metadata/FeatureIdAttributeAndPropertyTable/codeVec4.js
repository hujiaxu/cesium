// 创建100个VEC4值为0的数据
const vec4Count = 100;
const vec4Data = new Float32Array(vec4Count * 4);

for (let i = 0; i < vec4Count; i++) {
    vec4Data[i * 4] = 0.0;
    vec4Data[i * 4 + 1] = 0.0;
    vec4Data[i * 4 + 2] = 0.0;
    vec4Data[i * 4 + 3] = 0.0;
}

// 打印结果
console.log(vec4Data);

// 将Float32Array转换为ArrayBuffer
const buffer = vec4Data.buffer;

// 将ArrayBuffer转换为Base64
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

const base64Data = arrayBufferToBase64(buffer);

// 创建GLTF JSON
const gltf = {
    asset: {
        version: "2.0"
    },
    buffers: [
        {
            byteLength: buffer.byteLength,
            uri: `data:application/octet-stream;base64,${base64Data}`
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
            count: vec4Count,
            type: "VEC4",
            max: [0, 0, 0, 0],
            min: [0, 0, 0, 0]
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

// 打印GLTF JSON
console.log(JSON.stringify(gltf, null, 2));
