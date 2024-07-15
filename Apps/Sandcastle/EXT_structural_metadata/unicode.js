
const base64String = 'AAAAAM3MzD3NzEw+AACAP83MjD+amZk/AAAAQGZmBkDNzAxAAABAQGZmRkDNzExA'

// Function to decode Base64 string to Float32Array
function base64ToFloat32Array(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return new Float32Array(bytes.buffer);
}

// Decode the Base64 string
const floatArray = base64ToFloat32Array(base64String);

// Output the decoded Float32Array
console.log(floatArray);
