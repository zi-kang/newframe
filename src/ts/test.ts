import $ = require('jquery');
import tpl = require('template');
import cfg = require('config');
import layer = require('libs/Layer');
import http = require('libs/Http');
import app = require('app');
import footer = require('footer');

export class Test {
    public start() {
        let _url :string = window.location.href;
        let _array :string[] = _url.split('/');
        let _current :string = _array[_array.length - 1];
        let _cHtml =  _current.substring(0, _current.indexOf('.html'));
        (new footer.Footer()).init();
        console.log( _current.indexOf('#') );
        if( _cHtml == 'test' ){
            console.log('这不是首页!');
            var data = {
                name:123
            }
            var msg = tpl('items', data);
            $('#demoTest').html(msg);
        }else if(_cHtml == 'sdk'){
            console.log('sdk page!');
        }else{
            console.log( '这是首页' );
            (new app.App()).start();
        }
    }
}