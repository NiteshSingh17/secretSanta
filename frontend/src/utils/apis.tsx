'use server'
import axios from 'axios';
import { getBaseUrl } from './baseUrl';

const URIS = {
    secretSanta : 'santa'
}

const RequestClient = axios.create({
    baseURL: getBaseUrl(),
    timeout: 10000
  });
  
async function postSecretSanta(payload:any) {
    try{
        const { data } = await RequestClient.post(URIS.secretSanta, payload) ;
        return data;
    }catch (err : any) {
        return { error: true, message: err?.response?.data?.message || err.message }
    }
}

export {postSecretSanta};