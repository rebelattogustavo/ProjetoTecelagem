const { initializeApp } = require("firebase/app"); 
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    getDocs,
    getDoc,
    deleteDoc,
  } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA1l31Ax63NmM6VrQ7BbphEiJM8bdsL-RE",
  authDomain: "projetotecelagem-75d67.firebaseapp.com",
  projectId: "projetotecelagem-75d67",
  storageBucket: "projetotecelagem-75d67.appspot.com",
  messagingSenderId: "870912059311",
  appId: "1:870912059311:web:299a4cba50b953b412715a",
  measurementId: "G-9SMMCJNFLR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function cadastrar(nomeTabela, id, dado) {
  if (id) {
      const entidadeReferencia = await setDoc(doc(db, nomeTabela, id), dado);
      const dataSalva = {
          ...dado,
          id: id
      }
      return dataSalva;
  } else {
      const entidadeReferencia = await addDoc(collection(db, nomeTabela), dado);
      const dataSalva = {
          ...dado,
          id: entidadeReferencia.id
      }
      return dataSalva;
  }
}

async function buscar(nomeTabela) {
  const tabelaRef = collection(db, nomeTabela);

  const q = query(tabelaRef);
  
  const querySnapshot = await getDocs(q);
  
  const lista = [];
  querySnapshot.forEach((doc) => {
      const dado = {
          ...doc.data(),
          id: doc.id
      }
      lista.push(dado);
  });
  return lista;
}

async function buscarPorId(nomeTabela, id) {
  const docRef = doc(db, nomeTabela, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      return docSnap.data();
  } else {
      return new Error("Not found!");
  }

}

async function remover(nomeTabela, id){
  const dado = await deleteDoc(doc(db, nomeTabela, id));
  return {
      message: `${id} deleted`
  }
}

module.exports = {
  cadastrar,
  buscar,
  buscarPorId,
  remover
}