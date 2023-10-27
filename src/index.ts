import {YMApi} from "ym-api";
const api = new YMApi();

const getAccountStatus = async () => {
  try {
    await api.init({username: "example@yandex.ru", password: "password"});
    const result = await api.getAccountStatus();
    console.log({result});
  } catch (e) {
    console.log(`api error ${e.message}`);
  }
};


document.body.style.border = "5px solid red";

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

const playButton = document.querySelector('.d-icon_play');
const syncButton = createElementFromHTML('<button class=".d-icon">Sync</button>');
const playButtonDiv = playButton?.parentElement;
playButtonDiv.after(syncButton);

syncButton.addEventListener('click', getAccountStatus);

const playMusic = () => {
  playButton?.click();
};

