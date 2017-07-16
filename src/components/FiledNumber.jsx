var React = require('react');
var createReactClass = require('create-react-class');

var FiledNumber = createReactClass({
    getInitialState: function(){
        return {value:"", valid:true};
    },
    handleChange: function(e){
        var isvalid = e.target.value>0?true:false;
        this.setState({value:parseFloat(e.target.value), valid:isvalid})
        console.log(this.state.value);
    },
    render: function(){
        var classN = this.state.valid?'form-group':'form-group has-error';
        return (
            <div className={classN}>
                <input onChange={this.handleChange} placeholder={this.props.exnum} className="form-control" value={this.state.value} type="number"/>
            </div>
        );
    }
})
module.exports = FiledNumber;
