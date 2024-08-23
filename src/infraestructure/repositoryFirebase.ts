import { db, addDoc } from './firebase';
import { collection } from 'firebase/firestore';

export class RepositoryFirebase {
    async save() {
        try {
            const auditCollection: any = collection(db, 'audit');
            console.log("auditCollection", auditCollection);
            
            const docRef = await addDoc(auditCollection, {visit: 1});
            console.log("docRef");
            // Imprime el ID del documento añadido
            console.log('Document written with ID: ', docRef.id);
          } catch (e) {
            console.log('Error adding document: ', e);
          }    
    }
}
