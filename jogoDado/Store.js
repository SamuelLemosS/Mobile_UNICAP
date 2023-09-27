import {create} from 'zustand';
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useStore = create(
    persist(
      (set) => ({
        historico: [],
        addResultado: (result) =>
          set((state) => ({ historico: [...state.historico, result] })),
      }),
      {
        name: 'dadoHistorico', 
        getStorage: () => AsyncStorage, 
      }
    )
  );

export default useStore