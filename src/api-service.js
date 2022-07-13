export default class apiService {
  static getResults(format, numWords, numParas) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=${format}&paragraphs=${numParas}&words=${numWords}`;

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
