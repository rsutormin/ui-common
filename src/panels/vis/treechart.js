/*global
 define
 */
/*jslint
 browser: true,
 white: true
 */
define([
    'kb.html',
    'kb.runtime',
    'q',
    'underscore',
    'kb.widget.vis.treechart'],
    function (html, R, q, _) {
        'use strict';

        function treechartWidget() {

            function widget(config) {

                var mount, container;


                function render() {

                    var tree = {"distance":1.4071952209999998,"children":[{"distance":1.560417613,"children":[{"distance":0.8164232332,"children":[{"distance":1.64603039,"lineStroke":"blue","children":[{"distance":1.1912512929999999,"name":"Name: 272"},{"distance":0.2587069401,"children":[{"distance":0.9325443527,"name":"Name: 276"},{"distance":0.9325443527,"name":"Name: 978"}],"name":"Internal_1"}],"name":"Internal_2"},{"distance":0.3960933649,"children":[{"distance":1.293369403,"children":[{"distance":1.1478189140000001,"name":"Name: 1057"},{"distance":0.23288558069999998,"children":[{"distance":0.9149333337,"name":"Name: 288"},{"distance":0.9149333337,"name":"Name: 1515"}],"name":"Internal_3"}],"name":"Internal_4"},{"distance":0.8057599986999999,"children":[{"distance":1.6354283189999999,"name":"Name: 1231"},{"distance":0.4340411574,"children":[{"distance":1.201387162,"name":"Name: 343"},{"distance":1.201387162,"name":"Name: 464"}],"name":"Internal_5"}],"name":"Internal_6"}],"name":"Internal_7"}],"name":"Internal_8"},{"distance":0.39046349709999995,"children":[{"distance":1.902778648,"children":[{"distance":1.360462771,"name":"Name: 106"},{"distance":0.47035007580000004,"children":[{"distance":0.8901126953,"name":"Name: 934"},{"distance":0.8901126953,"name":"Name: 1054"}],"name":"Internal_9"}],"name":"Internal_10"},{"distance":0.4729067488,"children":[{"distance":1.397082329,"children":[{"distance":0.5653421255,"children":[{"distance":0.8279102152,"name":"Name: 342"},{"distance":0.8279102152,"name":"Name: 1713"}],"name":"Internal_11"},{"distance":0.3477657895,"children":[{"distance":1.045486551,"name":"Name: 903"},{"distance":1.045486551,"name":"Name: 1589"}],"name":"Internal_12"}],"name":"Internal_13"},{"distance":1.231259573,"children":[{"distance":0.6385272126999999,"children":[{"distance":0.9205478839000001,"name":"Name: 1637"},{"distance":0.1636952651,"children":[{"distance":0.7568526188,"name":"Name: 1025"},{"distance":0.7568526188,"name":"Name: 824"}],"name":"Internal_14"}],"name":"Internal_15"},{"distance":0.5053072371,"children":[{"distance":1.05376786,"name":"Name: 1595"},{"distance":1.05376786,"name":"Name: 936"}],"name":"Internal_16"}],"name":"Internal_17"}],"name":"Internal_18"}],"name":"Internal_19"}],"name":"Internal_20"},{"distance":0.9656803766,"children":[{"distance":1.149298406,"children":[{"distance":0.956902682,"children":[{"distance":0.7888292567999999,"children":[{"distance":0.8160517855,"children":[{"distance":0.537360022,"name":"Name: 401"},{"distance":0.537360022,"name":"Name: 1525"}],"name":"Internal_21"},{"distance":0.4314880921,"children":[{"distance":0.9219237153,"name":"Name: 815"},{"distance":0.9219237153,"name":"Name: 515"}],"name":"Internal_22"}],"name":"Internal_23"},{"distance":0.4452777714,"children":[{"distance":1.696963293,"name":"Name: 226"},{"distance":0.8411297886000001,"children":[{"distance":0.8558335041999999,"name":"Name: 187"},{"distance":0.252896874,"children":[{"distance":0.6029366302,"name":"Name: 273"},{"distance":0.6029366302,"name":"Name: 424"}],"name":"Internal_24"}],"name":"Internal_25"}],"name":"Internal_26"}],"name":"Internal_27"},{"distance":0.8661748054,"children":[{"distance":1.2911110989999999,"children":[{"distance":0.9418578419,"name":"Name: 233"},{"distance":0.9418578419,"name":"Name: 42"}],"name":"Internal_28"},{"distance":0.5245401729,"children":[{"distance":0.9284337287,"children":[{"distance":0.7799950391,"name":"Name: 423"},{"distance":0.7799950391,"name":"Name: 278"}],"name":"Internal_29"},{"distance":0.8028183449999999,"children":[{"distance":0.9056104228,"name":"Name: 1584"},{"distance":0.9056104228,"name":"Name: 425"}],"name":"Internal_30"}],"name":"Internal_31"}],"name":"Internal_32"}],"name":"Internal_33"},{"distance":1.005346759,"children":[{"distance":0.9892172049000001,"children":[{"distance":2.253878188,"name":"Name: 928"},{"distance":1.105691385,"children":[{"distance":1.148186803,"name":"Name: 219"},{"distance":1.148186803,"name":"Name: 110"}],"name":"Internal_34"}],"name":"Internal_35"},{"distance":0.5153876455999999,"children":[{"distance":0.9438424187,"children":[{"distance":1.097751558,"children":[{"distance":0.6861137706,"name":"Name: 1211"},{"distance":0.6861137706,"name":"Name: 1468"}],"name":"Internal_36"},{"distance":0.4345186071,"children":[{"distance":1.349346722,"name":"Name: 1397"},{"distance":1.349346722,"name":"Name: 256"}],"name":"Internal_37"}],"name":"Internal_38"},{"distance":0.5399268917,"children":[{"distance":1.507464707,"children":[{"distance":0.6803161486,"name":"Name: 286"},{"distance":0.2625687896,"children":[{"distance":0.4177473591,"name":"Name: 289"},{"distance":0.4177473591,"name":"Name: 444"}],"name":"Internal_39"}],"name":"Internal_40"},{"distance":0.8535382456,"children":[{"distance":1.33424261,"name":"Name: 305"},{"distance":0.7231769037000001,"children":[{"distance":0.6110657065,"name":"Name: 352"},{"distance":0.6110657065,"name":"Name: 1051"}],"name":""}],"name":""}],"name":""}],"name":""}],"name":""}],"name":""}],"name":""};

                    var $tree = $.jqElem('div').css({width : '800px', height : '500px'}).kbaseTreechart(

                        {
                            lineStyle: 'square',
                            //fixed : true,
                            dataset : tree,
                            //displayStyle:'nt',
                            //distance : 50,
                            layout : 'cluster',
                            //bias : 'leaf',
                        }

                    );

                    return {
                        title: 'Sample tree chart',
                        content: $tree.$elem,
                    }

                }

                function attach(node) {
                    return q.Promise(function (resolve) {
                        mount = node;
                        container = document.createElement('div');
                        mount.appendChild(container);
                        var rendered = render();

                        R.send('app', 'title', rendered.title);
                        $(container).append(rendered.content);

                        resolve();
                    });
                }
                function start(params) {
                    return q.Promise(function (resolve) {
                        resolve();
                    });
                }
                function stop(node) {
                    return q.Promise(function (resolve) {

                        resolve();
                    });
                }
                function detach(node) {
                    return q.Promise(function (resolve) {

                        resolve();
                    });
                }

                return {
                    attach: attach,
                    start: start,
                    stop: stop,
                    detach: detach
                };
            }


            return {
                create: function (config) {
                    return widget(config);
                }
            };
        }


        function setup(app) {
            app.addRoute({
                path: ['treechart'],
                widget: treechartWidget()
            });

        }
        function teardown() {
            // TODO: remove routes
            return false;
        }
        function start() {
            //
            return false;
        }
        function stop() {
            //
            return false;
        }
        return {
            setup: setup,
            teardown: teardown,
            start: start,
            stop: stop
        };
    });
