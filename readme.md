# React Example of Wisdom Pet Medicine #

The [public class fields](https://babeljs.io/docs/plugins/transform-class-properties/) syntax is used here

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


## Obtain dependencies and lauch the project ##

```sh
    # npm
    npm install
    npm start
```
