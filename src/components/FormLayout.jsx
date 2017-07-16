var React = require('react');
var createReactClass = require('create-react-class');

var FiledNumber = require('./FiledNumber.jsx')


var FormLayout = createReactClass({
    getInitialState: function(){
        return {result : 0};
    },
    handleAdd: function(){
        var r = this.refs.filedNum1.state.value+this.refs.filedNum2.state.value;
        this.setState({result: r})
    },
    handleSubtract: function(){
        var r = this.refs.filedNum1.state.value-this.refs.filedNum2.state.value;
        this.setState({result: r})
    },
    handleDivide: function(){
        var r = this.refs.filedNum1.state.value/this.refs.filedNum2.state.value;
        this.setState({result: r})
    },
    handleMultiply: function(){
        var r = this.refs.filedNum1.state.value*this.refs.filedNum2.state.value;
        this.setState({result: r})
    },
    handleClear: function(){
        this.refs.filedNum1.setState({value:""});
        this.refs.filedNum2.setState({value:""});
        this.setState({result : 0})
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-header text-center">
                    <h1>Simple calculator</h1>
                </div>
                <div className="panel-body">
                    <div className="row form-group">
                        <div className="col-sm-6">
                            <FiledNumber exnum="123" ref="filedNum1"/>
                        </div>
                        <div className="col-sm-6">
                            <FiledNumber exnum="789" ref="filedNum2"/>
                        </div>
                    </div>
                </div>
                <div className="panel-footer text-center">
                    <div className="row form-group">
                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.handleAdd}> + Add </button>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.handleSubtract}> - Subtrack </button>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.handleDivide}> / Divide </button>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.handleMultiply}> * Multiply </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-9">
                            <div className="bg-info border-radius text-left">
                                <strong>{this.state.result}</strong>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-danger" onClick={this.handleClear}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})
module.exports = FormLayout;
