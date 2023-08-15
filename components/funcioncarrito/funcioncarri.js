import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveCartProducts = async (cart) => {
    try {
      const jsonCart = JSON.stringify(cart);
      await AsyncStorage.setItem('cartProducts', jsonCart);
    } catch (error) {
      console.error('Error al guardar los productos en AsyncStorage:', error);
    }
  };
  