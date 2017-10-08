# React Example of Wisdom Pet Medicine #

The [https://babeljs.io/docs/plugins/transform-class-properties/](public class fields) syntax is used here

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


## Obtain dependencies and lauch the project ##

    npm install
    npm start
