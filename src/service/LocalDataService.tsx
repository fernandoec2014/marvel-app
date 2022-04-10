export class LocalDataService {
  static storage = sessionStorage

  static setAuthentication(authentication: string) {
    this.storage.setItem('x-auth', authentication)
  }
  static getAuthentication() {
    return String(this.storage.getItem('x-auth'))
  }
  static setIdAuthor(author: string) {
    this.storage.setItem('author', author)
  }
  static getIdAuthor() {
    return String(this.storage.getItem('author'))
  }

}