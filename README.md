# Chinese Nickname Generator

Generate unique Chinese nicknames based on browser fingerprints.

## Installation

### NPM

```bash
npm install chinese-nickname-generator
```

### Browser

```html
<script src="https://unpkg.com/chinese-nickname-generator@1.0.0/dist/chinese-nickname-generator.min.js"></script>
```

## Usage

### In Node.js

```javascript
const ChineseNicknameGenerator = require('chinese-nickname-generator');

const generator = new ChineseNicknameGenerator();

generator.generateNickname().then(({ fullName, gender }) => {
  console.log(`Generated nickname: ${fullName} (${gender})`);
});
```

### In Browser

```html
<script src="https://unpkg.com/chinese-nickname-generator@1.0.0/dist/chinese-nickname-generator.min.js"></script>
<script>
  const generator = new ChineseNicknameGenerator();

  generator.generateNickname().then(({ fullName, gender }) => {
    console.log(`Generated nickname: ${fullName} (${gender})`);
  });
</script>
```

## API

### generateNickname()

Returns a Promise that resolves to an object containing:

- `fullName`: The generated Chinese nickname
- `gender`: The gender associated with the nickname ('男' for male, '女' for female)

## License

This project is licensed under the MIT License.