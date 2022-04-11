import axios from 'axios';

export class ApiService {
  static baseURL: string =
    'https://bp-marvel-api.herokuapp.com/marvel-characters';
  static baseUrlAuthentication: string = 'https://mysql-bp-login.herokuapp.com';

  /* Consumo del servicio de login */
  static async login(parameters: any) {
    const url = `${this.baseUrlAuthentication}/login`;
    try {
      const body = {
        email: parameters.email,
        password: parameters.password,
      }
      const res = await axios.post(url, body);
      return res;
    } catch (error) {
      throw new Error('No se pudo ejecutar el servicio login.');
    }
  }

  /* Consumo del servicio de account create */
  static async account(parameters: any) {
    const url = `${this.baseUrlAuthentication}/signup`;
    try {
      const body = {
        email: parameters.email,
        password: parameters.password,
        authorid: parameters.authorId,
      }
      const res = await axios.post(url, body);
      return res;
    } catch (error) {
      throw new Error('No se pudo ejecutar el servicio de creación de cuenta.');
    }
  }

  /* Consumo del servicio de para obtener todos los personajes  */
  static async getAllHero(parameters: any) {
    const url = `${this.baseURL}?idAuthor=${parameters.idAuthor}`
    try {
      const res = await axios.get(url);
      return res.data
    } catch (error) {
      throw new Error('No se pudo ejecutar el servicio de creación de cuenta.');
    }
  }

  /* Consumo del servicio agregar personajes */
  static async addHero(parameters: any) {
    const url = `${this.baseURL}?idAuthor=${parameters.idAuthor}`
    try {
      const body = {
        title: parameters.title,
        body: parameters.body,
        image: parameters.image,
        category: 'main',
      }

      const res = await axios.post(url, body);
      return res;
    } catch (error) {
      throw new Error('No se pudo ejecutar el servicio de creación de cuenta.')
    }
  }


  /* Consumo del servicio editar personajes */
  static async editHero(parameters: any) {
    const url = `${this.baseURL}/${parameters.id}?idAuthor=${parameters.idAuthor}`
    try {
      const body = {
        title: parameters.title,
        body: parameters.body,
        image: parameters.image,
        category: 'main',
      }
      const res = await axios.put(url, body);
      return res;
    } catch (error) {
      throw new Error('No se pudo ejecutar el servicio de creación de cuenta.')
    }
  }


  /* Consumo del servicio eliminar personajes */
  static async deleteHero(parameters: any) {
    const url = `${this.baseURL}/${parameters.id}?idAuthor=${parameters.idAuthor}`
    try {
      const res = await axios.delete(url);
      return res;
    } catch (error) {
      throw new Error('No se pudo ejecutar el servicio de creación de cuenta.');
    }
  }
}
