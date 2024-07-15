// Base64编码的二进制数据
let base64String = 'AAAAAAAAAAAAAAAA5DiOP+Q4jj/kOI4/5DgOQOQ4DkDkOA5AVlVVQFZVVUBWVVVA5DiOQOQ4jkDkOI5AHcexQB3HsUAdx7FAVlXVQFZV1UBWVdVAjuP4QI7j+ECO4/hA5DgOQeQ4DkHkOA5BAAAgQQAAIEEAACBBAAAAAAAAAAAAAAAAAACAP92ZzD0Q9YA9B0HVPHcffj/QGUs+AAMAPrywUz3rhHg/HXaWPuWqPT4f05w9Y0VvP3UqxT6+ing+IIHNPZiDYj+d+vA+w+KXPqEr+z1ub1I/DaEMP/RFsT6bkxI+REU/P9m0Hj+hD8g+H2slPgpNKT/WdC4/P+rbPqHVNT462RA/46U7P0SL7D6BlUM+RIvsPgAAgD8AAIA/AACAP+Q4jj/kOI4/5DiOP8dxnD/HcZw/x3GcP6uqqj+rqqo/q6qqP47juD+O47g/juO4P3Icxz9yHMc/chzHP1ZV1T9WVdU/VlXVPzmO4z85juM/OY7jPxzH8T8cx/E/HMfxPwAAAEAAAABAAAAAQAkACAAHAAYABQAEAAMAAgABAAAA';

// 解码Base64字符串为二进制数据
let binaryString = atob(base64String);
let binaryLength = binaryString.length;
let bytes = new Uint8Array(binaryLength);
for (let i = 0; i < binaryLength; i++) {
  bytes[i] = binaryString.charCodeAt(i);
}

// 获取 bufferView 的偏移和长度
let bufferViewByteOffset = 400; // 偏移量
let bufferViewByteLength = 20; // 长度

// 提取 bufferView 中的二进制数据
let bufferViewBytes = bytes.slice(bufferViewByteOffset, bufferViewByteOffset + bufferViewByteLength);

// 解析为无符号短整型数组 (Uint16Array)
let uint16Array = new Uint16Array(bufferViewBytes.buffer);

console.log(uint16Array);

// 显示解析后的无符号短整型数据
console.log(Array.from(uint16Array));
