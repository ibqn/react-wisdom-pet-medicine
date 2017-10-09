# React Example of Wisdom Pet Medicine #

Events methods are implemented using the [public class fields](https://babeljs.io/docs/plugins/transform-class-properties/) syntax.

```javascript
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    handleClick = () => {
        console.log('this is:', this)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}
```


## Getting started ##

Obtain dependencies and lauch the project

```sh
# npm
npm install
npm start
```
