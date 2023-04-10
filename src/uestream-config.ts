import * as dotenv from 'dotenv';
import api from "api";
dotenv.config();

const configs: any = {
    CLIENT_ASSERTION_TYPE: process.env.UE_CLIENT_ASSERTION_TYPE,
    CLIENT_SECRET: process.env.UE_CLIENT_SECRET,
    CLIENT_ID: process.env.UE_CLIENT_ID,
    ACCESS_PUBLIC_KEY: process.env.UE_ACCESS_PUBLIC_KEY,
    ACCESS_SEED: process.env.UE_ACCESS_SEED,
    AUTHGROUP: process.env.UE_AUTHGROUP,
    SUBJECT: process.env.UE_SUBJECT,
    STREAM: process.env.UE_STREAM,
    CONSUMER: process.env.UE_CONSUMER,
    INBOX: process.env.UE_INBOX,
    SERVER: process.env.UE_SERVER,
    UEAUTH: process.env.UE_AUTH,
    UESTREAMS: process.env.UE_STREAMS,
    AUTHSDK: process.env.AUTHSDK,
    STREAMSDK: process.env.STREAMSDK
}

export default configs;