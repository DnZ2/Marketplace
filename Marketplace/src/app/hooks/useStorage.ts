import { useEffect } from "react"
import { LocalStorage } from "shared/lib/local-storage"
const useStorage = <T>(key: string, value: T) => {
    useEffect(()=>{
        LocalStorage.set(key, value)
    },[value])
}

export default useStorage
