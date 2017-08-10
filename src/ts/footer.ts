/**
 * Created by huzikang on 17/8/7.
 */
import $ = require('jquery');

export class Board{
    qqNum: string;
    contactus: string;
    fdlink: string;
    timmer: any;
    constructor() {
        let _url :string = window.location.href;
        let board: any;
        if( _url.indexOf('.cn') > 0 ){
            this.qqNum = '2群：543115898&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1群：463096767（人数已满）';
            this.contactus = 'Tel：400 901 0688&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mail：support@easyar.com';
            this.fdlink = '';
            this.fdlink += '<a target="_blank" href="//www.sightp.com">视+官网</a>';
            this.fdlink += '<a target="_blank" href="//console.sightp.com">视+工作台</a>';
        }else{
            this.qqNum = '463096767';
            this.contactus = 'Tel：400-901-0688&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mail：support@easyar.com';
            this.fdlink = '';
            this.fdlink += '<a target="_blank" href="https://www.sightp.com">Sight Plus Official Website</a>';
            this.fdlink += '<a target="_blank" href="https://console.sightp.com">Sight Plus Bench</a>';
        }

    }
    show(msg: string){
        $('#board').eq(0).html(msg).end().animate({height: 30});
        this.timmer = setTimeout(()=>{
            $('#board').eq(0).html('').end().animate({height: 0});
            $('.footer').find('a').removeClass('blue');
            clearTimeout(this.timmer);
        },3000);
    }
    hide(){
        $('#board').eq(0).html('').end().animate({height: 0});
        clearTimeout(this.timmer);
    }
}


export class Footer{
    public init(): void {
        let board = new Board()

        $(document).on('click', '#qq', (e)=> {
            $(e.target).parent().siblings().find('.blue').removeClass('blue');
            $(e.target).toggleClass('blue');
            $(e.target).hasClass('blue')
                ? board.show(board.contactus)
                : board.hide();
        });
        $(document).on('click', '#friendLink', (e)=> {
            $(e.target).parent().siblings().find('.blue').removeClass('blue');
            $(e.target).toggleClass('blue');
            $(e.target).hasClass('blue')
                ? board.show(board.fdlink)
                : board.hide();

        });
    }
}
