var React = require('react');
var createReactClass = require('create-react-class');
var FormLayout = require('./components/FormLayout.jsx');

var Layout = createReactClass({
    render: function(){
        return (
            <div className="container">
                <FormLayout/>
            </div>
        );
    }
})
module.exports = Layout;
