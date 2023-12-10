import { readFileSync, createWriteStream } from 'fs';
import { createDeflateRaw } from 'zlib';

export interface CompressFileProps {
    inputPath: string;
    outputPath: string;
}

interface CompressFileResponse {
    state: 'successful' | 'rejected';
    error?: any;
}

export const compressFile = ({
    inputPath,
    outputPath,
}: CompressFileProps): Promise<CompressFileResponse> => {
    try {
        const inputBuffer = readFileSync(inputPath);
        const outputStream = createWriteStream(outputPath);

        const deflate = createDeflateRaw();
        deflate.pipe(outputStream);

        deflate.write(inputBuffer);
        deflate.end();

        return new Promise<CompressFileResponse>((resolve, reject) => {
            outputStream.on('finish', () => {
                resolve({
                    state: 'successful',
                });
            });

            outputStream.on('error', (error) => {
                reject({
                    state: 'rejected',
                    error,
                });
            });
        });
    } catch (error) {
        return Promise.reject({
            state: 'rejected',
            error,
        });
    }
};
