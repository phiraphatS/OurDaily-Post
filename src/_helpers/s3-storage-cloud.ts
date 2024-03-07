import { GetObjectCommand, GetObjectCommandOutput, HeadObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export class S3StorageCloud {
    private s3: S3Client;
    private region: string;
    private bucket: string;
    private accessKeyId: string;
    private secretAccessKey: string;
    constructor() {
        this.region = process.env.NEXT_PUBLIC_AWS_REGION || "";
        this.bucket = process.env.NEXT_PUBLIC_AWS_BUCKET || "";
        this.accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "";
        this.secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "";
        
        this.s3 = new S3Client({
            region: this.region,
            credentials: {
                accessKeyId: this.accessKeyId,
                secretAccessKey: this.secretAccessKey,
            }
        });
    }

    public async uploadFile(key: string, body: Buffer) {
        const params = {
            Bucket: this.bucket,
            Key: key,
            Body: body,
        };

        const command = new PutObjectCommand(params);
        const result = await this.s3.send(command);

        // return location of the file
        return result;
    }

    public async getSignedUrl(key: string) {
        const expiration = 60 * 60;
        const expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + expiration);

        const params = {
            Bucket: this.bucket,
            Key: key,
            Expires: expirationDate,
        };
        const command = new GetObjectCommand(params);
        return getSignedUrl(this.s3, command, { expiresIn: expiration });
    }

    public async getFile(key: string): Promise<GetObjectCommandOutput> {
        const params = {
            Bucket: this.bucket,
            Key: key,
        };

        const command = new GetObjectCommand(params);
        return this.s3.send(command);
    }

    public async fileExists(key: string): Promise<boolean> {
        const params = {
            Bucket: this.bucket,
            Key: key,
        };

        try {
            await this.s3.send(new HeadObjectCommand(params));
            return true;
        } catch (error: unknown) {
            if (error instanceof Error && error.name === 'NotFound') {
                return false;
            }
            throw error;
        }
    }
}