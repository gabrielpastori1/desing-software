const axios = require("axios");
const Whatsapp = function (phone) {
  this.phone = this.formatPhone(phone);

  /**
   * @author Gabriel Pastori
   * @date 2021-09-21
   * @description - Envia uma mensagem de texto
   * @param {string} message Mensagem a ser enviada
   * @returns {axios.Response}
   */
  const text = function (message) {
    return this.makeRequest({
      uri: "/send-text",
      body: {
        message,
      },
    });
  };
  
  /**
   * @author Gabriel Pastori
   * @date 2021-09-21
   * @param {string} image - URL ou base64. Limite 5MB
   * @param {string} caption=null - Descrição da imagem
   * @returns {axios.Response}
   */
  const image = function (image, caption = null) {
    return this.makeRequest({
      uri: "/send-image",
      body: {
        image,
        caption,
      },
    });
  };
  
  /**
   * @author Gabriel Pastori
   * @date 2021-09-21
   * @description - Envia uma mensagem de audio.
   * @param {string} audio URL ou base64. Limite 16MB
   * @returns {axios.Response}
   */
  const audio = function (audio) {
    return this.makeRequest({
      uri: "/send-audio",
      body: {
        audio,
      },
    });
  };
  
  /**
   * @author Gabriel Pastori
   * @date 2021-09-21
   * @description - Envia uma mensagem de video.
   * @param {string} video URL ou base64. Limite 16MB
   * @returns {axios.Response}
   */
  const video = function (video) {
    return this.makeRequest({
      uri: "/send-video",
      body: {
        video,
      },
    });
  };
  
  /**
   * @author Gabriel Pastori
   * @date 2021-09-21
   * @description - Envia uma mensagem de video.
   * @param {string} document URL ou base64. Limite 16MB
   * @param {string} format Formato do documento (OBRIGATÓRIO)
   * @param {string} fileName Nome do arquivo
   * @returns {axios.Response}
   */
  const document = function (document, format, fileName = null) {
    if (format === undefined) throw new Error("format is required");
    return this.makeRequest({
      uri: "/send-document",
      body: {
        document,
        fileName,
      },
    });
  };
  
  /**
   * @author Gabriel Pastori
   * @date 2021-09-21
   * @param {object} body = Possui vários parâmetros, consultar documentação Z-API. NÃO INFORMAR PHONE
   * @returns {axios.Response}
   * @tutorial https://developer.z-api.io/message/send-message-linkobrigat%C3%B3rios
   */
  const link = function (body) {
    delete body.phone;
    return this.makeRequest({
      uri: "/send-link",
      body,
    });
  };
  
  const formatPhone = function (phone) {
    if (phone.length === 11) phone = "55" + phone;
    return phone;
  };
  
  const makeRequest = function (options) {
    var assign = Object.assign;
    const defaultConfig = {
      method: "POST",
      uri: "/",
      body: {},
    };
    const props = assign({}, defaultConfig, options);
  
    const _instance = process.env.Z_API_INSTANCE;
    const _token = process.env.Z_API_TOKEN;
  
    const baseUrl = `https://api.z-api.io/instances/${_instance}/token/${_token}`;
  
    if (props.body.phone == undefined) props.body.phone = this.phone;
  
    const request =
      props.method === "POST" ? axios.post(`${baseUrl}${props.uri}`, props.body) : axios.get(`${baseUrl}${props.uri}`);
  
    return request;
  };

  return {
      text,
      image,
      audio,
      video,
      document,
      link
  }
};

module.exports = Whatsapp;
