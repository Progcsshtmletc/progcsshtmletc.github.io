let phrases = [
  { text: '��������� ����� ������� �����', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: '���������� ������ �� ����������', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: '�����������, � ��� ���� ������', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: '���������� ����� �� ����� �� �����', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: '������ ��� �������� � ���-���������', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: '��������� ������� � ���������� � ������������', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: '������� � ����� �������� ����� � ��������� ��� ������ ���������', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: '���������� ������� ������� � ������ ������ �����', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: '��������� ������������� � Telegram-�������', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase,'textContent',phrases[i].text);
  smoothly(image,'src',phrases[i].image)
}