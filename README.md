# Chinese Fakename

Generate unique Chinese nicknames based on browser fingerprints.

## Installation

### NPM
```bash
npm install fakenamejs
```

### Browser

```html
<script src="https://unpkg.com/fakenamejs@1.1.0/dist/fakename.min.js"></script>
```

## Usage


```js

  const generator = new Fakename()
  generator.generate({
    // gender:0 // 0 female, 1 male ,optional
  }).then(({ nickname, gender, visitorId }) => {
    this.fp = visitorId
    this.nickname = nickname
    this.gender = gender
  })

```

## License

This project is licensed under the MIT License.