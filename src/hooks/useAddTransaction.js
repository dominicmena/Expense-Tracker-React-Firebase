import { async } from "@firebase/util"
import {addDoc, collection} from 'firebase/firestore'

export const useAddTransaction = () => {

    const transactionCollectionRef = collection()
    
    const addTransaction = async () => {
        await addDoc()

    }
    
    return {addTransaction}
}