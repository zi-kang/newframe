/// <reference path='../d.ts/requirejs.d.ts' />

requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '/assets/libs/jquery/jquery',
        layer: '/assets/libs/layer/layer'
    }
});

requirejs(['test', 'layer'], (test, layer) => {
    layer.config({
        path: '/assets/libs/layer/'
    });

    (new test.Test()).start();
    console.log(1111);
});