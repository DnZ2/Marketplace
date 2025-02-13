/* eslint-disable @typescript-eslint/no-unused-vars */
export class LocalStorage {

    public static get<T>(key: string): T | null {
        try {
            const json = localStorage.getItem(key);
            if (json) {
                const data = JSON.parse(json) as T;
                return data;
            }
            return null;
        } catch (error) {
            return null;
        }
    }
  
    public static set<T>(key: string, value: T): boolean {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            return false;
        }
    }
  
    public static has(key: string): boolean {
        try {
            return localStorage.getItem(key) !== null;
        } catch (error) {
            return false;
        }
    }
  
    public static delete(key: string): boolean {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            return false;
        }
    }
  
    public static clear(): boolean {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            return false;
        }
    }
  
    public static get length(): number {
        try {
            return localStorage.length;
        } catch (error) {
            return 0;
        }
    }
  
}