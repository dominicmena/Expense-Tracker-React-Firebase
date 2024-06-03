import { query } from "firebase/firestore"
import { useEffect, useState } from "react"
import {db} from "../config/firebase-config"
import { query, collection } from "firebase/firestore"


export const useGetTransactions = () => {
const [transactions, setTransactions] = useState([])

const transactionCollectionRef = collection(db, "transactions");

const GetTransactions = async () => {
    try {
        const queryTransactions = query(transactionCollectionRef, )
    }catch (err) {
        console.error(err)
    }
}

useEffect(() => {
    getTransactions()
}, [])
    return {transaction}
}