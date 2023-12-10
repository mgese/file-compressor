# File Compressor Ts

## Overview

This is a package to compress any file in TypeScript.


## Features

- **Compression Algorithm**: Compresses files using the zlib compression algorithm.
- **File Format Support**: Supports various file formats, such as text files, JSON files, and binary files.
- **Integrity Preservation**: Maintains file integrity during compression.
- **Error Handling**: Provides error handling for any issues that may arise during the compression process.

## Installation

```bash
npm install file-compressor-ts
```

## Usage

```typescript
import {compressFile} from 'file-compressor-ts';

void compressFile({
    inputPath: 'input.txt',
    outputPath: 'output.gz',
}).then((response) => {
    if (response.state === 'successful') {
        console.log('File compressed successfully!');
    } else {
        console.error('Error compressing file:', response.error);
    }
}).catch((error) => {
    console.error('Error compressing file:', error);
});
```

You can call the `compressFile` function and pass it an object containing the input and output file paths (`inputPath` and `outputPath`).

The function returns a promise that will be resolved with either a successful or rejected result. You can use `.then` to handle the successful case and `.catch` to handle errors.
