import Base64 from 'crypto-js/enc-base64'
import UTF8 from 'crypto-js/enc-utf8'
import { JSEncrypt } from 'jsencrypt'
import md5 from 'crypto-js/md5'
import CryptoJS from 'crypto-js'

export function encodeByBase64(txt: string) {
  return UTF8.parse(txt).toString(Base64)
}

export function decodeByBase64(txt: string) {
  return Base64.parse(txt).toString(UTF8)
}

export function encryptByMd5(txt: string) {
  return md5(txt).toString()
}

const publicKey
  = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9zHWcYUSFLQ0IgWLarZ+pnVyreaWenpilPpwQwyAmW/yrRw3GuWaulnZgicD3EWG+8fEihdVrI2CeeF4tI4KwOL2lKl8trZu4qFX+qcgvsIizxcNuKXe+pf6xFirdxKWX8507ITm4U/hQSaNMPBjlg6Eg0IPNJteFeSEDZTeNhGMYVyz3AFLgXgSeAVPLQvmS6OFojz/WK3zgGEsCISFs3LWVs74tzGpJV+Tuhx+nwwYTiKuHIYl9Lsm0j6FAMNTjNs7Hh0+YRidKOKvfdd5HDpsa57dTX7OKIG6cahJS6lOhk6KeM0U2Jp2/70Cnod4UjBqT+9LvNyBjN4MjpYigQIDAQAB'

export function encryptByRsa(txt: string) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

const defaultKeyWork = 'K8H23psg5Irw3vyB'

export function encryptByAes(word, keyWord = defaultKeyWork) {
  const key = CryptoJS.enc.Utf8.parse(keyWord)
  const arcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(arcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString()
}
