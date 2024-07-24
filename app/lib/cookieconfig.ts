import { cookies } from 'next/headers'


export default class CookieConfig {
    token: string | undefined;
    constructor() {
        this.token = '';
    }

    getToken = (cookieName: string) => {
        try {
            const cookiesList = cookies()
            const hasCookie = cookiesList.has(cookieName)
            if (hasCookie) {
                const cookieStore = cookies()
                this.token = cookieStore.get(cookieName)?.value
            }
            return this.token;
        } catch
        {
            return '';
        }

    }

    setToken = (cookieName: string, value: string) => {
        try {
            const cookieStore = cookies()
            console.log(value);
            cookieStore.set(cookieName, value)
        } catch
        {
            return '';
        }
    }

    deleteCookie = (cookieName: string) => {
        try {


            const cookieStore = cookies();
            cookieStore.set('aaaaa', 'asdasdasd');
            console.log('SECOND LOG');
        } catch (e) {
            console.log(e);
        }
    }
}